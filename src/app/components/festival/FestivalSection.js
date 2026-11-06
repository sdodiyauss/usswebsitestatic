"use client";

import DiwaliFireworks from "./effects/DiwaliFireworks";
import { getActiveFestival } from "./config";

/**
 * Renders the active festival effect for the banner.
 * Switch festivals in `./config.js` only — do not edit CompHome for festival changes.
 */
export default function FestivalSection() {
  const festival = getActiveFestival();

  if (!festival?.enabled || !festival.effect) {
    return null;
  }

  switch (festival.effect) {
    case "fireworks":
      return (
        <DiwaliFireworks
          options={festival.fireworks}
          className={`festival-${festival.id}`}
        />
      );
    default:
      return null;
  }
}

export { getActiveFestival, festivalConfig } from "./config";
