import Image from "next/image";
import AnimatedParagraph from "../../components/ui/AnimatedParagraph";
import bgImage from "@/public/img/7.jpg";

function page() {
  return (
    <div className="grid h-screen grid-cols-2">
      <div className="relative h-full w-full">
        <Image
          src={bgImage}
          alt="About Us"
          fill
          sizes="100vw"
          quality={100}
          priority
          className="object-cover"
          placeholder="blur"
        />
      </div>
      <div className="flex flex-col items-center justify-center">
        <AnimatedParagraph className="p-8 text-xl">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut quae,
          odit earum, exercitationem porro ratione eaque minima, nemo reiciendis
          totam nostrum temporibus illum impedit minus eius consequatur sint
          quasi amet! Iste ipsam neque consequuntur officia, ex inventore ad
          assumenda necessitatibus non, cumque quo facilisis.
        </AnimatedParagraph>
      </div>
    </div>
  );
}

export default page;
