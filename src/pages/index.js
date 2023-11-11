import Services from "@/components/services";
import { Inter } from "next/font/google";
import CardPage from './cardPage'
import Sliders from "@/components/Slider";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <CardPage />
      <Services />
      <Sliders/>
    </>
  );
}
