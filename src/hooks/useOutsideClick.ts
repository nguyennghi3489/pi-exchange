import { RefObject, useEffect } from "react";

export const useOutsideClick = (ref: RefObject<HTMLElement>, fn: Function) => {
  useEffect(() => {
    function handleClickOutside(ev: Event) {
      if (
        ref.current &&
        ev.target != null &&
        !ref.current.contains(ev.target as HTMLElement)
      ) {
        fn();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, fn]);
};

export const testABC = 1;
