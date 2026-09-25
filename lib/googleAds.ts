type GoogleWindow = Window & {
  gtag?: (...args: unknown[]) => void;
};

export function trackGoogleAdsConversion(): void {
  if (typeof window === "undefined") {
    return;
  }

  const googleWindow = window as GoogleWindow;

  if (typeof googleWindow.gtag === "function") {
    googleWindow.gtag("event", "conversion", {
      send_to: "AW-18468350920/DM87CLWcsoIdEMjXsuZE",
    });
  }
}