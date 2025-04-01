import { createSlice } from "@reduxjs/toolkit";

const initialState = { cartItems: [] };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCartItems: (state, action) => {
      const item = action.payload;
      const book = state.cartItems.find((x) => x.ID === item.ID);

      if (book) {
        // 如果已經有這本書，則增加數量
        state.cartItems = state.cartItems.map((x) =>
          x.ID === book.ID ? { ...x, quantity: x.quantity + item.quantity } : x
        );
      } else {
        // 如果沒有這本書，則新增並設定數量
        state.cartItems = [
          ...state.cartItems,
          { ...item, quantity: item.quantity },
        ];
      }
    },
  },
});

// export state to global
export const selectCartItems = (state) => state.cart.cartItems;

// export actions to global
export const { addCartItems, removeCartItems } = cartSlice.actions;

// export reducer to global
export default cartSlice.reducer;
