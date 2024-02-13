import { IGiphy } from "../../models/giphy";

interface Props {
  item: IGiphy;
  onClick: () => void;
}
export const GiphyListItem = ({ item, onClick }: Props) => {
  return (
    <div role="listitem" onClick={onClick}>
      <img src={item.images.original.webp} alt={item.title} />
      <p>{item.title}</p>
    </div>
  );
};
