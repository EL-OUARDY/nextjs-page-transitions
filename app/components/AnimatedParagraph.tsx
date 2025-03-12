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
      const text = new splitType("p.animated-paragrapgh", {
        types: "lines",
        tagName: "div",
        lineClass: "line",
      });

      text.lines?.forEach((line) => {
        line.innerHTML = `<span>${line.innerHTML}</span>`;
      });

      gsap.set("p.animated-paragrapgh .line span", {
        y: 400,
        display: "block",
      });

      gsap.to("p.animated-paragrapgh .line span", {
        y: 0,
        duration: 2,
        stagger: 0.075,
        ease: "power4.out",
        delay: 0.25,
      });

      return () => {
        if (text) text.revert();
      };
    },
    { scope: textRef },
  );

  return (
    <div className="" ref={textRef}>
      <p className={`animated-paragrapgh ${className}`}>{children}</p>
    </div>
  );
}

export default AnimatedParagraph;
