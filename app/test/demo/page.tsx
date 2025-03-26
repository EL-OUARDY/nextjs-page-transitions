"use client";

import { Link, useTransitionRouter } from "next-view-transitions";
import Image from "next/image";

export default function Page() {
  const router = useTransitionRouter();
  return (
    <div className="flex h-screen items-center justify-center space-y-2">
      <div className="">
        <Link
          href="#"
          onClick={(e) => {
            e.preventDefault();
            router.back();
          }}
        >
          <div className="relative my-4 flex justify-center">
            <Image
              width={300}
              height={300}
              src={"/img/7.jpg"}
              alt="image"
              quality={100}
              priority
              className="aspect-square rounded-full"
              style={{
                viewTransitionName: `view-transition-image`,
              }}
            />
          </div>
          <div className="text-center">
            <p>OK you just saw the demo :)</p>← back to homepage
          </div>
        </Link>
      </div>
    </div>
  );
}
