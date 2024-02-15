import { IGiphy } from "../../models/giphy";

interface Props {
  item: IGiphy;
  onClick: () => void;
}
export const GiphyListItem = ({ item, onClick }: Props) => {
  return (
    <div role="listitem" onClick={onClick} className="relative mb-4">
      <img
        src={item.images.original.webp}
        alt={item.title}
        width={item.images.original.width}
        height={item.images.original.height}
        className="w-full bg-purple-300"
      />
      <p className="absolute w-full bottom-0 text-white font-bold bg-slate-500/50">
        {item.title}
      </p>
    </div>
  );
};
