import { useRef } from "react";
import { IGiphy } from "../../models/giphy";
import { useOutsideClick } from "../../hooks/useOutsideClick";

interface Props {
  item: IGiphy;
  onClose: () => void;
}
export const GiphyDetail = ({ item, onClose }: Props) => {
  const ref = useRef(null);
  useOutsideClick(ref, onClose);

  return (
    <div ref={ref} role="dialog">
      <img src={item.images.original.webp} alt={item.title} />
      <p>{item.title}</p>
      <p>{item.rating}</p>
      <p>{item.username}</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
};
