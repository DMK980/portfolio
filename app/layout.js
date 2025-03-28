import { Roboto_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "./componets/scroll/SmoothScroll";

const RobotoMono = Roboto_Mono({
  subsets:['latin'],
  variable:'--font-roboto-mono'
})

export const metadata = {
  title: "Portfolio",
  description: "My Portfolio Website",
};

export default function RootLayout({ children }) {
  
  return (
    <SmoothScroll>
      <html lang="en">
        <body className={`${RobotoMono.variable}`}>
          {children}
        </body>
      </html>
    </SmoothScroll>
  );
}
