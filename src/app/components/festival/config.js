/**
 * Festival banner config — change ONLY this file to switch festivals.
 *
 * activeFestival options:
 *   "none"   → no festival effect (default banner)
 *   "diwali" → fireworks background
 *
 * Add new festivals under `festivals` and set `activeFestival` to enable them.
 */
export const festivalConfig = {
  // 👇 Switch festival here
  activeFestival: "diwali",

  festivals: {
    none: {
      id: "none",
      label: "Default",
      enabled: false,
      effect: null,
      overlayOpacity: 0.5,
    },
    diwali: {
      id: "diwali",
      label: "Diwali",
      enabled: true,
      effect: "fireworks",
      overlayOpacity: 0.35,
      // Fireworks tuning for this festival
      fireworks: {
        autoresize: true,
        opacity: 0.35,
        acceleration: 1.05,
        friction: 0.97,
        gravity: 1.4,
        particles: 65,
        traceLength: 4,
        traceSpeed: 12,
        explosion: 6,
        intensity: 28,
        flickering: 45,
        lineStyle: "round",
        hue: { min: 0, max: 360 },
        delay: { min: 18, max: 38 },
        rocketsPoint: { min: 15, max: 85 },
        lineWidth: {
          explosion: { min: 1, max: 3.5 },
          trace: { min: 1, max: 2.2 },
        },
        brightness: { min: 55, max: 90 },
        decay: { min: 0.012, max: 0.028 },
        mouse: { click: false, move: false, max: 1 },
      },
    },
    // Example placeholders for future festivals:
    // holi: { id: "holi", label: "Holi", enabled: true, effect: "colorsplash", overlayOpacity: 0.3 },
    // christmas: { id: "christmas", label: "Christmas", enabled: true, effect: "snowfall", overlayOpacity: 0.4 },
  },
};

export function getActiveFestival() {
  const { activeFestival, festivals } = festivalConfig;
  const selected = festivals[activeFestival] || festivals.none;

  if (!selected?.enabled || selected.effect === null) {
    return festivals.none;
  }

  return selected;
}
