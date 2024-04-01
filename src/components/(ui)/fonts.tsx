import { Inter, Zilla_Slab } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  style: ["normal"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900", ]
});
export const zillaSlab = Zilla_Slab({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["300", "400", "500", "600", "700"]
})