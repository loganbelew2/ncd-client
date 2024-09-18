"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";

interface PropsObject {
  closeMenu?: () => void;
}

export default function SecondaryButton({closeMenu}: PropsObject) {
  const router = useRouter();
  return (
      <button
        className={`btn--secondary btn-wrapper secondary`}
        aria-label="Contact Us"
        onClick={() => {
          router.push('contact-us')
          closeMenu && closeMenu();
        }}
      >
        Contact us
      </button>

  );
}
