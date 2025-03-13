"use client";
import styles from "./BlockTextReveal.module.css";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

function BlockTextReveal({ children, className }: Props) {
  return (
    <div className={`${styles.blockTextReveal} ${className}`}>{children}</div>
  );
}

export default BlockTextReveal;
