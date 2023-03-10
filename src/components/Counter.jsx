import React from "react";
import iconPlus from "../images/icon-plus.svg";
import iconMinus from "../images/icon-minus.svg";
import { GlobalContext } from "../context/GlobalContext";

const Counter = () => {
  const [count, setCount] = React.useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  const { setNumberOfItems } = React.useContext(GlobalContext);
  const addToCart = () => {
    setNumberOfItems((prev) => prev + count);
    setCount(0);
  };
  return (
    <div className="flex flex-col items-center justify-center gap-4 lg:flex-row">
      <div className="relative w-full rounded-lg border bg-lightGrayishBlue py-4 text-center lg:w-2/5">
        <p className="font-bold">{count}</p>
        {/* Icon Minus */}
        <div
          className="absolute top-[45%] left-5 cursor-pointer"
          onClick={decrement}
        >
          <img src={iconMinus} alt="" />
        </div>
        {/* Icon Plus */}
        <div
          className="absolute top-[40%] right-5 cursor-pointer"
          onClick={increment}
        >
          <img src={iconPlus} alt="" />
        </div>
      </div>
      {/* Add to Cart Button */}
      <div className="w-full lg:w-3/5">
        <button
          className={`rounded-lg ${
            count === 0 ? "bg-gray-500" : "bg-orange"
          } w-full`}
          onClick={addToCart}
          disabled={count === 0}
        >
          <div className="flex items-center justify-center gap-4 py-4">
            <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                fill="#fff"
                fillRule="nonzero"
              />
            </svg>

            <p className="text-md font-bold text-white">Add to cart</p>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Counter;
