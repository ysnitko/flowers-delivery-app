'use client';
import { useState } from 'react';

export default function Quantity() {
  const [quantity, setQuantity] = useState(1);

  const addQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const subtractQuantity = () => {
    if (quantity <= 1) {
      return;
    }
    setQuantity((prev) => prev - 1);
  };

  return (
    <div className="w-full grid grid-cols-quantity justify-between items-center max-w-36 border-border-table border-[1px]">
      <button
        type="button"
        className="p-2 border-r-[1px] border-border-table  text-2xl"
        onClick={subtractQuantity}
      >
        -
      </button>
      <p className="p-2 text-center text-base">{quantity}</p>
      <button
        type="button"
        className="p-2 border-l-[1px] border-border-table text-2xl"
        onClick={addQuantity}
      >
        +
      </button>
    </div>
  );
}
