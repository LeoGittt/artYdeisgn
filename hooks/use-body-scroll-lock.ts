import { useCallback, useEffect } from "react";

export const useBodyScrollLock = () => {
  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;

    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, []);

  const lockScroll = useCallback(() => {
    document.body.style.overflow = "hidden";
    document.body.style.touchAction = "none";
    document.body.style.position = "fixed";
    document.body.style.width = "100%";
  }, []);

  const unlockScroll = useCallback(() => {
    document.body.style.overflow = "";
    document.body.style.touchAction = "";
    document.body.style.position = "";
    document.body.style.width = "";
    // Restaurar la posición del scroll
    window.scrollTo(0, parseInt(document.body.style.top || "0") * -1);
    document.body.style.top = "";
  }, []);

  return { lockScroll, unlockScroll };
};
