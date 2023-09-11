import Image from "next/image";
import CategoryPage from "./menu/[category]/page";
import MenuPage from "./menu/page";
import Slider from "@/components/Slider";
import Featured from "@/components/Featured";
import Offer from "@/components/Offer";

export default function Home() {
  return (
    <main>
      <Slider />
      <Featured />
      <Offer />
    </main>
  );
}
