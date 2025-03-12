import Image from "next/image";
import AnimatedParagraph from "../components/AnimatedParagraph";

function page() {
  return (
    <div className="grid h-screen grid-cols-2">
      <div className="relative h-full w-full">
        <Image
          src="/7.jpg"
          alt="About Us"
          fill
          objectFit="cover"
          quality={100}
          priority
        />
      </div>
      <div className="flex items-center justify-center">
        <AnimatedParagraph className="p-8 text-xl">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut quae,
          odit earum, exercitationem porro ratione eaque minima, nemo reiciendis
          totam nostrum temporibus illum impedit minus eius consequatur sint
          quasi amet! Iste ipsam neque consequuntur officia, ex inventore ad
          assumenda necessitatibus non, cumque quo.
        </AnimatedParagraph>
      </div>
    </div>
  );
}

export default page;
