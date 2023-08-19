"use client";

import { Provider as TextBalancer } from "react-wrap-balancer";
import { ParallaxProvider } from "react-scroll-parallax";
import { ThemeProvider } from "next-themes";

interface Props {
  children: React.ReactNode;
  [key: string]: any;
}
export function Providers({ children, ...rest }: Props) {
  return (
    <ThemeProvider attribute="class">
      <TextBalancer>
        <ParallaxProvider>
          <div {...rest}>{children}</div>
        </ParallaxProvider>
      </TextBalancer>
    </ThemeProvider>
  );
}
