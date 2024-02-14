import { useInfiniteQuery } from "react-query";
import { AxiosError } from "axios";
import { IGiphy, IGiphyResponse } from "../../models/giphy";
import { searchGIF } from "../../services/giphy";
import { GiphyList } from "../../components/giphy-list";
import { useParams } from "react-router-dom";

const LIMIT_ITEMS_PER_PAGE = 25;

export const SearchPage = () => {
  const { key } = useParams();
  const { data, status, fetchNextPage, isFetching } = useInfiniteQuery<
    IGiphyResponse,
    AxiosError
  >({
    queryKey: ["search"],
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

  const handleShowDetail = () => {};

  return (
    <div>
      {status === "error" && <p>Error fetching data</p>}
      {status === "loading" && <p>Fetching data...</p>}
      {status === "success" && (
        <div className="gap-8 columns-3 ...">
          {items && <GiphyList items={items} onClick={handleShowDetail} />}
        </div>
      )}
      {data &&
        !isFetching &&
        data.pages.length > 0 &&
        data.pages[0].pagination.count <
          data.pages[0].pagination.total_count && (
          <button
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
