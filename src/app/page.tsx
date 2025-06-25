import Banner from "@/components/home/sections/banner";
import AppCarousel from "@/components/home/sections/carousel";
import Footer from "@/components/home/sections/footer";
import HighLights from "@/components/home/sections/highlights";
import Navbar from "@/components/home/sections/navbar";
import Subscription from "@/components/home/sections/subscription";

export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <HighLights images={[]} />
      <Subscription />
      <AppCarousel images={[]} />
      <Footer />
    </>
  );
}
