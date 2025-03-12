"use client";
import Link from "next/link";
import { useTransitionRouter } from "next-view-transitions";

function Header() {
  const router = useTransitionRouter();

  function slideInOut() {
    document.documentElement.animate(
      [
        { opacity: 1, transform: "translateY(0)" },
        { opacity: 0.2, transform: "translateY(-35%)" },
      ],
      {
        duration: 1500,
        fill: "forwards",
        easing: "cubic-bezier(0.87, 0, 0.13, 1)",
        pseudoElement: "::view-transition-old(root)",
      },
    );

    document.documentElement.animate(
      [
        { clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)" },
        { clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)" },
      ],
      {
        duration: 1500,
        fill: "forwards",
        easing: "cubic-bezier(0.87, 0, 0.13, 1)",
        pseudoElement: "::view-transition-new(root)",
      },
    );
  }

  return (
    <div className="fixed top-0 z-1 flex w-full px-4 pt-4">
      <Link
        href="/"
        onClick={(e) => {
          e.preventDefault();
          router.push("/", {
            onTransitionReady: slideInOut,
          });
        }}
        className="flex-1"
      >
        <h2 className="">/Home</h2>
      </Link>
      <div className="flex space-x-4 text-sm uppercase">
        <Link
          href="/work"
          onClick={(e) => {
            e.preventDefault();
            router.push("/work", {
              onTransitionReady: slideInOut,
            });
          }}
          className="hover:underline"
        >
          Work
        </Link>
        <Link
          href="/about"
          onClick={(e) => {
            e.preventDefault();
            router.push("/about", {
              onTransitionReady: slideInOut,
            });
          }}
          className="hover:underline"
        >
          About
        </Link>
        <Link
          href="/contact"
          onClick={(e) => {
            e.preventDefault();
            router.push("/contact", {
              onTransitionReady: slideInOut,
            });
          }}
          className="hover:underline"
        >
          Contact
        </Link>
      </div>
    </div>
  );
}

export default Header;
