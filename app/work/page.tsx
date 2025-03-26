"use client";

import { Link } from "next-view-transitions";
import Image from "next/image";
import { useEffect, useState } from "react";

function Page() {
  const [isTransitionReady, setIsTransitionReady] = useState(false);

  const projects = [
    { id: "1", img: "/img/1.jpg" },
    { id: "2", img: "/img/2.jpg" },
    { id: "3", img: "/img/3.jpg" },
    { id: "4", img: "/img/4.jpg" },
    { id: "5", img: "/img/5.jpg" },
  ];

  useEffect(() => {
    // Wait for initial render and transitions to complete
    const timer = setTimeout(() => {
      setIsTransitionReady(true);
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col items-center space-y-2 py-[20em]">
      {projects.map((project) => (
        <Link
          href={`/project/${project.id}`}
          key={project.id}
          className="md:w-1/3"
        >
          <Image
            width={800}
            height={1200}
            src={project.img}
            alt="image"
            quality={100}
            priority
            style={{
              viewTransitionName: isTransitionReady
                ? `image-${project.id}`
                : "",
            }}
          />
        </Link>
      ))}
    </div>
  );
}

export default Page;
