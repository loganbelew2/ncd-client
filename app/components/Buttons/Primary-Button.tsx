"use client"
import Link from "next/link";

interface PropsObject {
  closeMenu?: () => void;
}

export default function PrimaryButton({closeMenu}: PropsObject) {


let close = closeMenu;
  return (
    <Link className="btn-wrapper" href="/booking">
      <button
        className={`btn--primary`}
        aria-label="Book a car detailing service"
        onClick={() => {
          // closeMenu();
        }}
      >
        Book now
      </button>
    </Link>
  );
}
