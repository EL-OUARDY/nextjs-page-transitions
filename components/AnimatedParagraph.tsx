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

function AnimatedParagraph({ children, className }: Props) {
  const textRef = useRef(null);

  useGSAP(
    () => {
      // Split the text into lines and wrap each line in a div with class "line"
      const text = new splitType("p.animated-paragrapgh", {
        types: "lines",
        tagName: "div",
        lineClass: "line",
      });

      // Apply custom styles and wrap each line's innerHTML in a span
      gsap.utils.toArray(text.lines).forEach((line) => {
        const element = line as HTMLElement;
        element.style.clipPath = "polygon(0 0, 100% 0, 100% 100%, 0% 100%)";
        element.innerHTML = `<span>${element.innerHTML}</span>`;
        const child = element.querySelector("span");
        child!.style.position = "relative";
        child!.style.willChange = "transform";
      });

      // Set initial position of each span to be 400px down and display as block
      gsap.set("p.animated-paragrapgh .line span", {
        y: 400,
        display: "block",
      });

      // Animate each span to move to its original position with a staggered effect
      gsap.to("p.animated-paragrapgh .line span", {
        y: 0, // Final position
        duration: 2, // Duration of the animation
        stagger: 0.075, // Delay between each character's animation
        ease: "power4.out", // Easing function for the animation
        delay: 0.25, // Delay before the animation starts
      });

      // Cleanup function to revert the split text when the component unmounts
      return () => {
        if (text) text.revert();
      };
    },
    { scope: textRef }, // Scope the animation to the textRef
  );

  return (
    <div ref={textRef}>
      <p className={`animated-paragrapgh ${className}`}>{children}</p>
    </div>
  );
}

export default AnimatedParagraph;
