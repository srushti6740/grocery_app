import HomeSlider from "@/app/components/HomeSlider";
import CatSlider from "@/app/components/CatSlider";

export default function Home() {
  return (
  <>
  <div className="sliderWrapper bg-[#FAFAFA] py-4">
    <HomeSlider />
    
    <CatSlider />
  </div>


  </>
  );
}
