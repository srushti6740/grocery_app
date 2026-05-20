import HomeSlider from "@/app/components/HomeSlider";
import CatSlider from "@/app/components/CatSlider";
import PopularProducts from "@/app/components/PopularProducts";
import Banners from "@/app/components/Banners";
import ProductRow from "@/app/components/ProductRow";
import Footer from "@/app/components/Footer";

import { FaLongArrowAltRight } from "react-icons/fa";
import Link from "next/link";

export default function Home() {
  return (
  <>
  <div className="sliderWrapper bg-[#FAFAFA] py-4">
    <HomeSlider />
    
    <CatSlider />

    <PopularProducts />

    <Banners />

    <ProductRow title={"Latest Products"} />
    <ProductRow title={"Featured Products"} />
    <ProductRow title={"Breaksfast & Dairy"} />

      <Footer />
    
  </div>


  </>
  );
}
