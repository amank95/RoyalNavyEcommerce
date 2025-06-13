import React from "react";
import { FaStar } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const HomeSectionCard = ({ product }) => {
   const navigate = useNavigate();

  return (
    <div
      data-aos="fade-up"
      data-aos-delay={product.aosDelay}
      key={product.id}
        onClick={() => navigate(`/men/clothing/mens_kurta`)}
      className="space-y-3 cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3"
    >
      {/* card section */}
      {/* IMage Div */}
      <div className="h-[13rem] w-[10rem]">
        <img
          className="object-cover object-top w-full h-full"
          src={product.imageUrl}
          alt=""
        />
      </div>

        {/* content */}
      <div className="p-4 ">
        <h3 className="text-lg font-medium text-gray-900">{product.brand}</h3>
        <p className="mt-2 text-sm text-gray-500">{product.title}</p>
        <div className="flex items-center gap-1">
          <FaStar className="text-yellow-400" />
          <span>4.5</span>
        </div>
      </div>
    </div>
  );
};

export default HomeSectionCard;
