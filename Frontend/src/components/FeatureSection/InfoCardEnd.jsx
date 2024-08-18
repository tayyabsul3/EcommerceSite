import InfoCard from "../Resuables/InfoCard";
import React from "react";
import { FaShippingFast, FaUndo, FaHeadset } from "react-icons/fa";

const InfoCardEnd = () => {
  return (
    <div className="flex gap-2 w-[95%] lg:gap-5 lg:w-[80%]  mx-auto my-40">
      <InfoCard
        logo={FaShippingFast}
        title="Fast Shipping"
        description="Receive your product within 2-3 working days. Free Cash on Delivery all over Pakistan."
      />
      <InfoCard
        logo={FaUndo}
        title="Return or Refunded"
        description="You can return your product within 7 days of receiving it. Request a refund."
      />
      <InfoCard
        logo={FaHeadset}
        title="Customer Support"
        description="24/7 Customer support that is respectful and helpful! Your satisfaction is our priority."
      />
    </div>
  );
};

export default InfoCardEnd;
