import SwiperComponent01 from "./components/SwiperComponent";
import Swiper01 from "./components/Swiper01";
import Swiper02 from "./components/Swiper02";
import Swiper03 from "./components/Swiper03";
import Swiper04 from "./components/Swiper04";

export default function Home() {
  return (
    <main>
      <div className="w-[90%] mx-auto mb-20">
      <h1 className="text-center text-4xl font-bold my-10">Carousal 01</h1>
      <SwiperComponent01 />
      </div>

      <div className="w-[90%] mx-auto mb-20">
      <h1 className="text-center text-4xl font-bold my-10"><a href="./C01">Carousal 02</a></h1>
      <Swiper01 />
      </div>

      <div className="w-[90%] mx-auto mb-20">
      <h1 className="text-center text-4xl font-bold my-10"><a href="./C01">Carousal 03</a></h1>
      <Swiper02 />
      </div>

      <div className="w-[90%] mx-auto mb-20">
      <h1 className="text-center text-4xl font-bold my-10"><a href="./C01">Carousal 04</a></h1>
      <Swiper03 />
      </div>

     <div className="w-[90%] mx-auto mb-20">
      <h1 className="text-center text-4xl font-bold my-10"><a href="./C01">Carousal 05</a></h1>
      <Swiper04 />
      </div>

      
    </main>
  );
}
