import { IGiphy } from "../../models/giphy";
import { GiphyListItem } from "../giphy-list-item";

interface Props {
  items: IGiphy[];
  onClick: (item: IGiphy) => void;
}
export const GiphyList = ({ items, onClick }: Props) => {
  return (
    <div role="list" className="gap-4 lg:columns-3 md:columns-2">
      {items.map((item: IGiphy) => (
        <GiphyListItem
          key={item.id}
          item={item}
          onClick={() => onClick(item)}
        />
      ))}
    </div>
  );
};
