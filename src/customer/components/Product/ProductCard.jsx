import React from "react";
import "./ProductCard.css";
import{ useNavigate} from "react-router-dom";

const ProductCard = ({ product }) => {
  //const { title, brand, imageUrl, price ,discountedPrice,color,discountPersent} = product;
  const navigate= useNavigate();

    // const handleNavigate=()=>{
    //   navigate(`/product/${product?._id}`)
    // }

  return (
    <div
      onClick={()=>navigate(`/product/${product?._id}`)}
      className="productCard w-[15rem] border m-3 transition-all cursor-pointer dark:hover:shadow-[0px_6px_20px_rgba(255,165,0,0.8)] hover:shadow-[0px_5px_15px_rgba(0,0,0,0.35)] dark:bg-gray-900 dark:text-white"
    >
      <div className="h-[20rem]">
        <img
          className="h-full w-full object-cover object-left-top"
          src={product.imageUrl}
          alt=""
        />
      </div>
      <div className="textPart bg-white dark:bg-gray-900 dark:text-white  p-3 ">
        <div>
          <p className="font-bold opacity-60">{product.brand}</p>
          <p className="">{product.title}</p>

          <p className="font-semibold opacity-50">{product.color}</p>
        </div>

        <div className="flex space-x-2 items-center">
          <p className="font-semibold">₹{product.discountedPrice}</p>
          <p className="opacity-50 line-through">₹{product.price}</p>
          <p className="text-green-600 font-semibold">{product.discountPersent}% off</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
