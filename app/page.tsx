import { About } from "./ui/view/About";
import { Explore } from "./ui/view/Explore";
import { Hero } from "./ui/view/Hero";
import { More } from "./ui/view/More";
// import VirtualTour from "./ui/components/Panaroma";
// import { Slider } from "./ui/view/Slider";

export default function Home() {
  return (
   <div className="">
    <Hero />
    <About />
    <More />
    <Explore />
    {/* <VirtualTour /> */}
    {/* <Slider /> */}
   </div>
  );
}
