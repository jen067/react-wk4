import { useState } from "react";

function AddToCart({ book }) {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    if (quantity < book.stock) {
      setQuantity(quantity + 1);
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const inputValue = (e) => {
    const value = e.target.value;
    if (value <= 0) {
      setQuantity(1);
    } else if (value > book.stock) {
      setQuantity(book.stock);
    } else {
      setQuantity(value);
    }
  };

  return (
    <div>
      <div className="flex items-center number-btns my-8">
        <span className="mr-8">Quantity</span>
        <button
          className="btn decrease text-lg"
          disabled={quantity === 1}
          onClick={decreaseQuantity}
        >
          -
        </button>
        <input
          type="text"
          value={quantity}
          onChange={inputValue}
          className="input border-none outline-none w-20 text-center text-lg"
        />
        <button
          className="btn increase text-lg"
          disabled={quantity === Number(book.stock)}
          onClick={increaseQuantity}
        >
          +
        </button>
      </div>
      <div className="add_to_cart flex justify-between items-center">
        <button className="btn decrease text-lg bg-slate-500 text-white md:px-20 lg:px-10 py-6">
          Add to cart
        </button>
        <h2 className="text-slate-600 text-4xl font-bold">${book.price}</h2>
      </div>
    </div>
  );
}

export default AddToCart;
