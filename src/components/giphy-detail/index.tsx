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
    <div role="dialog" className="relative z-10">
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div
            ref={ref}
            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
          >
            <button
              className="absolute right-2 top-0 text-white text-2xl"
              onClick={onClose}
            >
              X
            </button>
            <img
              className="w-full"
              src={item.images.original.webp}
              alt={item.title}
            />
            <div className="absolute w-full bottom-0 text-white font-bold bg-slate-500/50">
              <p>Title: {item.title}</p>
              <p>Rating: {item.rating}</p>
              <p>Username: {item.username}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
