"use client";

import React, { useState, useEffect, useRef } from "react";
// @ts-ignore
import FOG from "vanta/dist/vanta.fog.min";

export function VantaProvider({ children }: { children: React.ReactNode }) {
  const [vantaEffect, setVantaEffect] = useState(null);
  const myRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        FOG({
          el: myRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: true,
          minHeight: 500.0,
          minWidth: 500.0,
          highlightColor: 0x989898,
          midtoneColor: 0x3c3c3c,
          lowlightColor: 0x70707,
          baseColor: 0x0,
          blurFactor: 0.9,
          speed: 2.0,
          zoom: 1.5,
        })
      );
    }
    return () => {
      // @ts-ignore
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return (
    <div className="w-screen h-screen" ref={myRef}>
      {children}
    </div>
  );
}
