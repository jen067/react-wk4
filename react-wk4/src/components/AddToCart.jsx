import { createElement, useState } from "react";
import { useDispatch } from "react-redux";
import { addCartItems } from "../redux/cartSlice";

function AddToCart({ book }) {
  const [quantity, setQuantity] = useState(1);
  const [showToast, setShowToast] = useState(false);

  const dispatch = useDispatch();

  const addToCart = () => {
    setShowToast(true);
    dispatch(
      addCartItems({
        id: book.ID,
        title: book.title,
        cover: book.cover,
        price: book.price,
        countInStock: book.stock,
        quantity: quantity,
      })
    );

    setTimeout(() => {
      setShowToast(false);
    }, 2000);
  };

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

  const totalPrice = (price) => {
    const totalPrice = price * quantity;
    const totalSpan = createElement(
      "span",
      { className: "totalPrice" },
      `$ ${totalPrice}`
    );
    return totalSpan;
  };

  return (
    <div>
      <div className="price text-xl mt-4 tracking-wide">
        Price：${book.price}
      </div>
      <div className="flex items-center number-btns my-8">
        <span className="mr-8 text-xl">Quantity</span>
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

      <div className="add_to_cart flex  flex-col-reverse gap-4 md:gap-0 md:flex-row md:justify-between md:items-center">
        <button
          type="primary"
          className="btn decrease text-lg bg-slate-500 text-white md:px-20 lg:px-[5.5rem] py-6"
          onClick={addToCart}
        >
          Add to cart
        </button>
        <div className="total text-slate-600 text-3xl font-semibold md:text-4xl md:font-bold">
          <span className="text-slate-600 text-xl opacity-60 font-bold mr-3">
            Total
          </span>{" "}
          {totalPrice(book.price)}
        </div>
      </div>

      {showToast && (
        <div className="toast">
          <div className="alert alert-info w-auto h-auto p-8 bg-[rgba(255,255,255,0.7)] border-none">
            <span className="text-lg">
              {quantity} of {book.title} {quantity > 1 ? "have" : "has"} been
              added to your cart
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

export default AddToCart;
