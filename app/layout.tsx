import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";
import { ViewTransitions } from "next-view-transitions";
import { ReactLenis } from "lenis/react";
import { ThemeProvider } from "../components/providers/theme-provider";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import { geistSans, geistMono } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "NextJS Page Transitions",
  description: "NextJS Page Transitions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <ReactLenis root>
        <html
          lang="en"
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
          suppressHydrationWarning
        >
          <body>
            <ThemeProvider
              attribute="class"
              defaultTheme="light"
              enableSystem
              disableTransitionOnChange
            >
              <Header />
              {children}
              <ThemeSwitcher />
            </ThemeProvider>
          </body>
        </html>
      </ReactLenis>
    </ViewTransitions>
  );
}
