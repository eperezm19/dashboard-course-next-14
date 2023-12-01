"use client";

import { useState } from "react";

interface Props {
  value?: number;
}

export const CartCounter = ({ value = 0 }: Props) => {
  const [cartCounter, setCartCounter] = useState(value);

  const handleCartCounter = (value: number) => {
    setCartCounter((prev) => prev + value);
  };

  return (
    <div className="flex flex-col justify-center items-center max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
      <h2 className="text-9xl">{cartCounter}</h2>
      <div className="w-full flex gap-2">
        <button
          onClick={() => handleCartCounter(-1)}
          type="button"
          className="w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          -
        </button>
        <button
          onClick={() => handleCartCounter(+1)}
          type="button"
          className="w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          +
        </button>
      </div>
    </div>
  );
};
