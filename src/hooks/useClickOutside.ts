import { useRef, useEffect } from "react";

/**
 *
 * @param
 *  @param
 * @returns object donNode reference
 */

const useClickOutside = <T extends any>(handler: any) => {
  const domNode = useRef<T | null>(null);

  useEffect(() => {
    const myHandler = (event: any) => {
      const myRef = domNode.current as any;
      if (!myRef.contains(event.target)) {
        handler();
      }
    };

    document.addEventListener("mousedown", myHandler);

    return () => {
      document.removeEventListener("mousedown", myHandler);
    };
  });

  return domNode;
};

export default useClickOutside;
