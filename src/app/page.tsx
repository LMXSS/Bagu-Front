import Navbar from "@/components/common/navbar";
import InitialAlert from "@/components/home/initialAlert";
import Banner from "@/components/home/sections/banner";
import AppCarousel from "@/components/home/sections/carousel";
import Footer from "@/components/home/sections/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      {/* <Subscription /> */}
      <AppCarousel images={[]} />
      <Footer />
      <InitialAlert />
    </>
  );
}
