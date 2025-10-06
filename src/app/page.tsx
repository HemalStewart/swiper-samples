import SwiperComponent01 from "./components/SwiperComponent";
import Swiper01 from "./components/Swiper01";
import Swiper02 from "./components/Swiper02";
import Swiper03 from "./components/Swiper03";
import Swiper04 from "./components/Swiper04";
import Swiper05 from "./components/Swiper05";
import Swiper08 from "./components/Swiper08";
import Swiper11 from "./components/Swiper11";
import Swiper10 from "./components/Swiper10";

// import Swiper06 from "./components/Swiper06";
import Swiper07 from "./components/Swiper07";

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

       <div className="w-[50%] mx-auto mb-20">
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

      <div className="w-[30%] mx-auto mb-20">
      <h1 className="text-center text-4xl font-bold my-10"><a href="./C01">Carousal 06</a></h1>
      <Swiper05 />
      </div>

      <div className="w-[60%] h-[800] mx-auto mb-20">
      <h1 className="text-center text-4xl font-bold my-10"><a href="./C01">Carousal 07</a></h1>
      <Swiper07 />
      </div>

      <div className="w-[90%] mx-auto mb-20">
      <h1 className="text-center text-4xl font-bold my-10"><a href="./C01">Carousal 08</a></h1>
      <Swiper08 />
      </div>

      {/* <div className="w-[90%] mx-auto mb-20">
      <h1 className="text-center text-4xl font-bold my-10"><a href="./C01">Carousal 09</a></h1>
      <Swiper09 />
      </div> */}

      <div className="w-[25%] mx-auto mb-20">
      <h1 className="text-center text-4xl font-bold my-10"><a href="./C01">Carousal 09</a></h1>
      <Swiper10 />
      </div>

      <div className="w-[25%] mx-auto mb-20">
      <h1 className="text-center text-4xl font-bold my-10"><a href="./C01">Carousal 10</a></h1>
      <Swiper11 />
      </div>
      
    </main>
  );
}
