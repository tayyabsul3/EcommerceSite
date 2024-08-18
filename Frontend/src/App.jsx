import { TbTruckDelivery } from "react-icons/tb";
import FeatureCard from "./components/FeatureSection/FeatureCard";
import Features from "./components/FeatureSection/Features";
import InfoCardEnd from "./components/FeatureSection/InfoCardEnd";
import CartDrawer from "./components/Header/CartDrawer";

import Carousel from "./components/HeroSection/Carousel";
import LatestProducts from "./components/LatestPRoductsSection/LatestProducts";
import { AiOutlineCar, AiOutlineCustomerService } from "react-icons/ai";

function App() {
  return (
    <div className="max-w-[2000px] mx-auto">
      <Carousel />
      <Features />
      <div
        className="flatsaleoffer w-full lg:whitespace-nowrap bg-black text-white font-semibold
      h-[15vh] flex items-center px-5 lg:px-40 lg:text-2xl my-20
      "
      >
        <h1>Save discount% on All products starting from month</h1>
      </div>
      <LatestProducts />

      <div className="flex flex-wrap lg:flex-nowrap space-x-5 my-20  justify-center">
        <FeatureCard
          icon={<TbTruckDelivery className=" lg:text-xl  " size={40} />}
          text="CASH ON DELIVERY"
        />
        <FeatureCard
          icon={
            <AiOutlineCustomerService
              className=" text-xl borde-2 border-sky-500"
              size={40}
            />
          }
          text="24/7 CUSTOMER SUPPORT"
        />
        <FeatureCard
          icon={
            <AiOutlineCar
              className=" text-xl borde-2 border-sky-500"
              size={40}
            />
          }
          text="FLEXIBLE SHIPPING"
        />
      </div>
      <InfoCardEnd />
    </div>
  );
}

export default App;
