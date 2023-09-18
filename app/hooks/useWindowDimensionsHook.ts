"use client";
import { useState, useEffect } from "react";

export default function useWindowDimensions() {
  const [width, setWidth] = useState<number>();
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    if (!width) {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return { width };
}
