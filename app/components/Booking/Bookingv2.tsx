"use client";
import { useEffect } from "react";

export default function BookingV2() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://squareup.com/appointments/buyer/widget/3inp0q2s30l40e/LGS9SEJZ0MAGP.js";
    script.async = true;
    script.id = "square-appointments-script";
    
    document.getElementById("square-appointments-container")?.appendChild(script);

    return () => {
      // Cleanup to remove the script when the component unmounts
      const existingScript = document.getElementById("square-appointments-script");
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <div id="square-appointments-container">
    </div>
  );
}
