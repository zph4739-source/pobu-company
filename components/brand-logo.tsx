"use client";

import type { CSSProperties, PointerEvent } from "react";
import { siteBasePath } from "@/lib/metadata";

export function BrandLogo({ large = false }: { large?: boolean }) {
  const reset = (event: PointerEvent<HTMLSpanElement>) => {
    event.currentTarget.style.setProperty("--logo-rx", "-7deg");
    event.currentTarget.style.setProperty("--logo-ry", "-10deg");
    event.currentTarget.style.setProperty("--logo-light", "38%");
  };
  return <span className={large ? "pobu-brand pobu-brand-hero" : "pobu-brand"}
    onPointerLeave={large ? reset : undefined}
    onPointerMove={large ? event => {
      if (event.pointerType !== "mouse" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      const box = event.currentTarget.getBoundingClientRect();
      const x = Math.max(0, Math.min(1, (event.clientX - box.left) / box.width));
      const y = Math.max(0, Math.min(1, (event.clientY - box.top) / box.height));
      event.currentTarget.style.setProperty("--logo-rx", `${(0.5-y)*14}deg`);
      event.currentTarget.style.setProperty("--logo-ry", `${(x-0.5)*24}deg`);
      event.currentTarget.style.setProperty("--logo-light", `${20+x*60}%`);
    } : undefined}>
    {large ? <span className="pobu-logo-stage" role="img" aria-label="POBU">
      <span className="pobu-logo-solid" aria-hidden="true">
        {Array.from({length: 16}, (_, index) => <span key={index} className="pobu-logo-layer" style={{transform:`translateZ(${index}px)`} as CSSProperties} />)}
        <span className="pobu-logo-face" />
      </span>
    </span> : <img className="pobu-logo-flat" src={`${siteBasePath}/pobu-logo.svg`} width="610" height="150" alt="POBU" />}
    <span className="pobu-brand-caption"><span>EST. 2026</span><span>THINK. BUILD. BEYOND.</span></span>
  </span>;
}
