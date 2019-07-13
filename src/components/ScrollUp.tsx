import React, { useEffect, useState } from "react";
import { Button } from "./Button";
import { scrollToTop } from "../utils/window";

export const ScrollUp = () => {
  const [isShown, setShown] = useState(false);
  useEffect(() => {
    const handleScroll = () => setShown(window.scrollY > window.innerHeight);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  if (!isShown) {
    return null;
  }
  return (
    <Button
      onClick={() => scrollToTop()}
      className="hidden lg:block fixed z-50 bottom-40 right-40 rounded-12 shadow bg-white p-12 lg:p-12 h-40 w-40"
    >
      ^
    </Button>
  );
};
