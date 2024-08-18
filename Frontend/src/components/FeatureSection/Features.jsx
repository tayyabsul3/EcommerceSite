import React from "react";
import { AiOutlineCustomerService, AiOutlineCar } from "react-icons/ai";
import { TbTruckDelivery } from "react-icons/tb";
import FeatureCard from "./FeatureCard";
import Heading from "../Resuables/Heading";
import FeatureLinkCard from "./FeatureLinkCard";

const Features = () => {
  return (
    <div>
      <div className="featured_links flex flex-col gap-20">
        <div className="heading space-y-5">
          <Heading text={"Featured Categories"} />
          <p className="w-[60%] mx-auto text-center ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            inventore sint doloribus quis quia nemo ut, est maiores cum eos
            reiciendis autem rem saepe facere vero impedit aperiam velit iusto.
          </p>
        </div>
        <div className="links flex mx-auto gap-5 lg:gap-10 px-5 flex-wrap justify-center">
          <FeatureLinkCard
            imageSrc="https://electrobes.com/wp-content/uploads/2021/01/Raspberry-Pi-4-8GB-RAM-Model-B-Quad-Core-CPU-1.5Ghz-Development-Board-at-best-price-online-at-electrobes-electronics-store-in-pakistan-300x300.webp"
            text="Modules & Breakout "
          />
          <FeatureLinkCard
            imageSrc="https://electrobes.com/wp-content/uploads/2019/07/Arduino-2WD-Smart-Robotics-Robot-Car-Chassis-Kit-with-DC-Motor-Set-300x300.jpg?v=1695462777"
            text="Robotics & Machines"
          />
          <FeatureLinkCard
            imageSrc="https://electrobes.com/wp-content/uploads/2024/05/IFR-32700-3.2v-6000-mAh-1C-Lithium-Phosphate-new-Battery-at-best-price-in-pakistan-300x300.webp"
            text="Batteries & Chargers"
          />
        </div>

        {/* <div>
          <Heading text={"Featured Product"} />
          <FeaturedProduct />
        </div> */}
      </div>
    </div>
  );
};

export default Features;
