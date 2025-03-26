import { Link } from "next-view-transitions";
import Image from "next/image";
import React from "react";

function page() {
  return (
    <div className="flex h-screen items-center justify-center space-y-2">
      <div>
        <Link href="/test/demo">
          <div className="relative my-4 flex justify-center">
            <Image
              width={100}
              height={100}
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
          click to see the demo →
        </Link>
      </div>
    </div>
  );
}

export default page;
