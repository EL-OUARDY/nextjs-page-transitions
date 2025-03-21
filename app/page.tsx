import { akkuratMonoFont } from "@/lib/fonts";
import AnimatedTitle from "../components/ui/AnimatedTitle";

export default function Home() {
  return (
    <div className="flex h-screen items-center justify-center overflow-hidden">
      <AnimatedTitle
        className={`${akkuratMonoFont.className} text-[14vw] leading-none font-black tracking-[-0.5rem] uppercase`}
      >
        Fashion
      </AnimatedTitle>
    </div>
  );
}
