import { Poppins, Inter } from "next/font/google";

export const poppinsThin = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: "300",
});

export const poppinsBold = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: "500",
});

export const InterBold = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: "500",
});
