import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function TawkWidget() {
  const location = useLocation();

  // list of pages you want to hide the chat widget
  const hideOn = ["/admin", "/booking-success", "/login"];

  const shouldHide = hideOn.includes(location.pathname);

  useEffect(() => {
    if (shouldHide) {
      // remove Tawk if already loaded
      const iframe = document.querySelector("iframe[src*='tawk']");
      iframe?.parentNode?.removeChild(iframe);
      return;
    }

    // load script if not hidden
    const script = document.createElement("script");
    script.src = "https://embed.tawk.to/68e71a0d206355195bf2a3af/1j73brhvs";
    script.async = true;
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");
    document.body.appendChild(script);

    return () => {
      // remove script on route change
      script.remove();
      const iframe = document.querySelector("iframe[src*='tawk']");
      iframe?.remove();
    };
  }, [location.pathname, shouldHide]);

  return null;
}
