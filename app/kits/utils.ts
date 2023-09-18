"use client";

import { useEffect, useState } from "react";

export default function hover3d(ref: any, { x, y, z }: any) {
  const [coords, setCoords] = useState({ x, y });
  const [isHovering, setIsHovering] = useState<boolean>(false);

  const handleMouseMove = (e: MouseEvent) => {
    const { offsetWidth: width, offsetHeight: height } = ref.current;
    const { clientX, clientY } = e;

    const x = (clientX - width / 2) / width;
    const y = (clientY - height / 2) / height;
    setCoords({ x, y });
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const { x: XCoord, y: YCoord } = coords;

  const xTransform = isHovering ? XCoord * x : 0;
  const yTransform = isHovering ? YCoord * y : 0;
  const zTransform = isHovering ? z : 0;

  const transform = `perspective(1000px) rotateX(${xTransform}deg) rotateY(${yTransform}deg) rotateZ(${zTransform}deg)`;
  const transition = isHovering ? "all 0.3s ease-in-out" : "";

  useEffect(() => {
    const { current } = ref;
    current.addEventListener("mousemove", handleMouseMove);
    current.addEventListener("mouseenter", handleMouseEnter);
    current.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      current.addEventListener("mousemove", handleMouseMove);
      current.addEventListener("mouseenter", handleMouseEnter);
      current.addEventListener("mouseleave", handleMouseLeave);
    };
  }, [ref]);

  return { transform, transition };
}
