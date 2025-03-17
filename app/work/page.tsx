import Image from "next/image";

function page() {
  const images = [
    "/img/1.jpg",
    "/img/2.jpg",
    "/img/3.jpg",
    "/img/4.jpg",
    "/img/5.jpg",
  ];
  return (
    <div className="flex flex-col items-center space-y-2 py-[20em]">
      {images.map((img) => (
        <Image
          key={img}
          width={800}
          height={1200}
          src={img}
          alt="image"
          quality={100}
          priority
          className="w-1/3"
        />
      ))}
    </div>
  );
}

export default page;
