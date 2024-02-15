import { useInfiniteQuery } from "react-query";
import { useParams } from "react-router-dom";
import { AxiosError } from "axios";
import { useState } from "react";
import { IGiphy, IGiphyResponse } from "../../models/giphy";
import { searchGIF } from "../../services/giphy";
import { GiphyList } from "../../components/giphy-list";
import { GiphyDetail } from "../../components/giphy-detail";

const LIMIT_ITEMS_PER_PAGE = 25;

export const SearchPage = () => {
  const { key } = useParams();
  const [detailItem, setDetailItem] = useState<IGiphy | undefined>(undefined);
  const { data, status, fetchNextPage, isFetching } = useInfiniteQuery<
    IGiphyResponse,
    AxiosError
  >({
    queryKey: ["search", key],
    queryFn: ({ pageParam }) =>
      searchGIF(key ?? "", pageParam, LIMIT_ITEMS_PER_PAGE),
    getNextPageParam: (lastPage) => {
      return (
        lastPage.pagination.total_count > lastPage.pagination.count &&
        Math.floor(
          (lastPage.pagination.count + lastPage.pagination.offset) /
            LIMIT_ITEMS_PER_PAGE
        )
      );
    },
  });
  const items = data?.pages.reduce(
    (acc: IGiphy[], cur: IGiphyResponse) => [...acc, ...cur.data],
    []
  );

  const handleShowDetail = (item: IGiphy) => {
    setDetailItem(item);
  };
  const closeShowDetail = () => {
    setDetailItem(undefined);
  };

  return (
    <div>
      {status === "error" && <p>Error fetching data</p>}
      {status === "loading" && <p>Fetching data...</p>}
      {status === "success" && items && (
        <GiphyList items={items} onClick={(item) => handleShowDetail(item)} />
      )}
      {detailItem && (
        <GiphyDetail item={detailItem} onClose={closeShowDetail} />
      )}
      {data &&
        !isFetching &&
        data.pages.length > 0 &&
        data.pages[0].pagination.count <
          data.pages[0].pagination.total_count && (
          <button
            className="bg-purple-400 py-4 px-12 font-bold text-white text-lg mt-8"
            onClick={() => {
              fetchNextPage();
            }}
          >
            Load More
          </button>
        )}
    </div>
  );
};
