"use client";
import { ReactNode, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import splitType from "split-type";

interface Props {
  children: ReactNode;
  className?: string;
}

gsap.registerPlugin(useGSAP);

function AnimatedTitle({ children, className }: Props) {
  const textRef = useRef(null);

  useGSAP(
    () => {
      // Split the text into individual characters
      const text = new splitType("h1.animated-title", { types: "chars" });

      // Apply custom styles to each character
      gsap.utils.toArray(text.chars).forEach((char) => {
        const element = char as HTMLElement;
        element.style.position = "relative";
        element.style.willChange = "transform";
      });

      // Set the initial position of each character to be off-screen (y: 400)
      gsap.set(text.chars, { y: 400 });

      // Animate the characters to their final position (y: 0)
      gsap.to(text.chars, {
        y: 0, // Final position
        duration: 1, // Duration of the animation
        stagger: 0.075, // Delay between each character's animation
        ease: "power4.out", // Easing function for the animation
        delay: 1, // Delay before the animation starts
      });
    },
    { scope: textRef },
  );

  return (
    <h1
      className={`animated-title ${className}`}
      ref={textRef}
      style={{
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
      }}
    >
      {children}
    </h1>
  );
}

export default AnimatedTitle;
