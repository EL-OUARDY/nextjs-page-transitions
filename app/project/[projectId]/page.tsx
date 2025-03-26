import Image from "next/image";
import React from "react";

interface Props {
  params: {
    projectId: string;
  };
}

async function page({ params }: Props) {
  const { projectId } = await params;
  return (
    <div className="flex h-screen items-center justify-center space-y-2">
      <div className="grid max-w-2xl grid-cols-2 gap-4 rounded-xl border p-4">
        <div className="relative w-full">
          <Image
            src={`/img/${projectId}.jpg`}
            fill
            alt="image"
            quality={100}
            priority
            className="rounded-xl object-cover"
            style={{
              viewTransitionName: `image-${projectId}`,
            }}
          />
        </div>
        <p className="my-2 p-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
          cumque natus exercitationem iusto ea at nulla consectetur assumenda
          facilis in libero eum ipsum perspiciatis sit? Eligendi ipsum ex
          similique! Similique. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Tempore, cumque natus exercitationem iusto ea at
          nulla consectetur assumenda facilis in libero eum ipsum perspiciatis
          sit? Eligendi ipsum ex similique! Similique. cumque natus
          exercitationem iusto ea at nulla consectetur assumenda facilis in
          libero eum ipsum perspiciatis sit? Eligendi ipsum ex similique!
          Similique.
        </p>
      </div>
    </div>
  );
}

export default page;
