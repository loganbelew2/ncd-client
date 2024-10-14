"use client";
import { useRouter } from "next/navigation";

interface PropsObject {
  closeMenu?: () => void;
  params?: number;
  // serviceId?: (pack: number) => void;
  // pkgNum: number;
}

export default function PrimaryButton({ closeMenu, params }: PropsObject) {
  const router = useRouter();
  const serviceNum = "?serviceId=" + params;
  return (
    
    <button
      className={`btn--primary`}
      aria-label="Book a car detailing service"
      onClick={() => {
        params ? router.push(`/booking${serviceNum}`) : router.push("/booking");
        closeMenu && closeMenu();
        // serviceId && serviceId(pkgNum);
      }}
    >
      Book Now
    </button>
    
  );
}
