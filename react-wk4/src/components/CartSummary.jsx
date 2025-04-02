import { useSelector } from "react-redux";
import { selectCartItems } from "../redux/cartSlice";

function CartSummary() {
  const cartItems = useSelector(selectCartItems);
  console.log(cartItems);
  const count =
    cartItems.length > 0
      ? cartItems.reduce((sum, item) => sum + item.quantity, 0)
      : 0;

  return (
    <div className="sticky top-0 z-50 w-full flex justify-evenly navbar bg-[#EEEEEE] drop-shadow-xl h-20">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="flex-none flex gap-4">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />{" "}
              </svg>
              <div className="indicator">
                {count > 0 && (
                  <span className="badge badge-sm indicator-item bg-[rgba(144,161,185,0.5)]">
                    {count}
                  </span>
                )}
              </div>
            </div>
          </div>
          <div
            tabIndex={0}
            className="card card-compact dropdown-content bg-base-100 0 mt-3 w-[400px] shadow"
          >
            <div className="card-body">
              <span className="text-lg font-bold">Shopping Basket</span>
              <div className="items ">
                {cartItems.length === 0 ? (
                  <p className="opacity-70">There is no item...</p>
                ) : (
                  cartItems.map((item) => (
                    <div className="mb-4">
                      <div
                        key={item.ID}
                        className="flex justify-between items-center  list-none"
                      >
                        <div className="left flex gap-8 items-center">
                          <img
                            src={item.cover}
                            alt={item.title}
                            className="w-[75px] h-[120px] object-cover object-center"
                          />
                          <div className="info flex flex-col  gap-2 text-base">
                            <li>{item.title}</li>
                            <li>{item.quantity}</li>
                          </div>{" "}
                        </div>

                        <div className="flex flex-col justify-end text-right gap-2 text-base">
                          <li className="font-semibold">
                            ${item.quantity * item.price}
                          </li>
                          <li>X</li>
                        </div>
                      </div>
                      <div className="w-full h-[0.5px] bg-slate-700 mt-2 opacity-60"></div>
                    </div>
                  ))
                )}
              </div>

              <span className=" text-slate-700 text-xl font-semibold text-right mb-4">
                Subtotal: $
                {cartItems.reduce(
                  (sum, item) => (sum += item.price * item.quantity),
                  0
                )}
              </span>
              <div className="card-actions">
                <button className="btn btn-primary btn-block">View cart</button>
              </div>
            </div>
          </div>
        </div>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

// function CartSummary() {
//   const cartItems = useSelector(selectCartItems);
//   console.log(cartItems);
//   const count =
//     cartItems.length > 0
//       ? cartItems.reduce((sum, item) => sum + item.quantity, 0)
//       : 0;

//   return (
//     <div className="flex justify-evenly navbar bg-[#EEEEEE] drop-shadow-xl h-20 mb-8 ">
//       <div className="flex-1">
//         <a className="btn btn-ghost text-xl">daisyUI</a>
//       </div>
//       <div className="flex-none flex gap-4">
//         <div className="dropdown dropdown-end">
//           <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
//             <div className="indicator">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-5 w-5"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 {" "}
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
//                 />{" "}
//               </svg>
//               <div className="indicator">
//                 {count > 0 && (
//                   <span className="badge badge-sm indicator-item bg-[rgba(144,161,185,0.5)]">
//                     {count}
//                   </span>
//                 )}
//               </div>
//             </div>
//           </div>
//           <div
//             tabIndex={0}
//             className="card card-compact dropdown-content bg-base-100 0 mt-3 w-[400px] shadow"
//           >
//             <div className="card-body">
//               <span className="text-lg font-bold">Shopping Basket</span>
//               <div className="items ">
//                 {cartItems.length === 0 ? (
//                   <p className="opacity-70">There is no item...</p>
//                 ) : (
//                   cartItems.map((item) => (
//                     <div className="mb-4">
//                       <div
//                         key={item.ID}
//                         className="flex justify-between items-center  list-none"
//                       >
//                         <div className="left flex gap-8 items-center">
//                           <img
//                             src={item.cover}
//                             alt={item.title}
//                             className="w-[75px] h-[120px] object-cover object-center"
//                           />
//                           <div className="info flex flex-col  gap-2 text-base">
//                             <li>{item.title}</li>
//                             <li>{item.quantity}</li>
//                           </div>{" "}
//                         </div>

//                         <div className="flex flex-col justify-end text-right gap-2 text-base">
//                           <li className="font-semibold">
//                             ${item.quantity * item.price}
//                           </li>
//                           <li>X</li>
//                         </div>
//                       </div>
//                       <div className="w-full h-[0.5px] bg-slate-700 mt-2 opacity-60"></div>
//                     </div>
//                   ))
//                 )}
//               </div>

//               <span className=" text-slate-700 text-xl font-semibold text-right mb-4">
//                 Subtotal: $
//                 {cartItems.reduce(
//                   (sum, item) => (sum += item.price * item.quantity),
//                   0
//                 )}
//               </span>
//               <div className="card-actions">
//                 <button className="btn btn-primary btn-block">View cart</button>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="dropdown dropdown-end">
//           <div
//             tabIndex={0}
//             role="button"
//             className="btn btn-ghost btn-circle avatar"
//           >
//             <div className="w-10 rounded-full">
//               <img
//                 alt="Tailwind CSS Navbar component"
//                 src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
//               />
//             </div>
//           </div>
//           <ul
//             tabIndex={0}
//             className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
//           >
//             <li>
//               <a className="justify-between">
//                 Profile
//                 <span className="badge">New</span>
//               </a>
//             </li>
//             <li>
//               <a>Settings</a>
//             </li>
//             <li>
//               <a>Logout</a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }

export default CartSummary;
