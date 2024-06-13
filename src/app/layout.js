import Navbar from "@/components/Navbar";

import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
// const roboto = Roboto({weight: [`100`, `300`, `400`, `500`, `700`, `900`] ,subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Next Learner",
    template: '%s | Next Learner'
  },
  description: "I am Raihan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme='dark'>
      <body className={inter.className}>
        <Navbar></Navbar>
        <div className=" my-8 max-w-7xl mx-auto">
          {children}
        </div>
      </body>
    </html>
  );
}
