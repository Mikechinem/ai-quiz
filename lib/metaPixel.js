export const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FB_PIXEL_ID;

export const pageview = () => {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", "PageView");
  }
};

export const trackEvent = (eventName, options = {}, eventID = null) => {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", eventName, options, eventID ? { eventID } : {});
  }
};
