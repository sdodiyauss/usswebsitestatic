"use client";

import { useEffect, useRef } from "react";
import { Fireworks } from "@fireworks-js/react";

export default function DiwaliFireworks({ options = {}, className = "" }) {
  const fireworksRef = useRef(null);

  useEffect(() => {
    const instance = fireworksRef.current;
    if (!instance) return undefined;

    instance.start();

    return () => {
      instance.stop();
    };
  }, []);

  return (
    <Fireworks
      ref={fireworksRef}
      className={`festival-effect festival-fireworks ${className}`.trim()}
      options={options}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  );
}
