// import { ADD_CART, REMOVE, REMOVE_ITEM } from "./type"

// const initialStore = {
//   carts: [],
// }
// // reducer
// export const cartReducer = (state = initialStore, action) => {
//   switch (action.type) {
//     case ADD_CART:
//       /*return {
//         ...state,
//         carts: [...state.carts, action.payload],
//       }*/
//       const itemIndex = state.carts.findIndex((item) => item.id === action.payload.id)
//       if (itemIndex >= 0) {
//         state.carts[itemIndex].qty += 1
//       } else {
//         const temp = { ...action.payload, qty: 1 }
//         return {
//           ...state,
//           carts: [...state.carts, action.payload],
//         }
//       }
//       break

//     case REMOVE:
//       const data = state.carts.filter((el) => el.id !== action.payload)
//       return {
//         ...state,
//         carts: data,
//       }

//     case REMOVE_ITEM:
//       const itemIndex_desc = state.carts.findIndex((item) => item.id === action.payload.id)
//       if (state.carts[itemIndex_desc].qty >= 1) {
//         const delete_item = (state.carts[itemIndex_desc].qty -= 1)
//         console.log([...state.carts, delete_item])
//         return {
//           ...state,
//           carts: [...state.carts],
//         }
//       } else if (state.carts[itemIndex_desc].qty === 1) {
//         const data = state.carts.filter((el) => el.id !== action.payload.id)
//         return {
//           ...state,
//           carts: data,
//         }
//       }
//       break
//     default:
//       return state
//   }
// }

import { ADD_CART, REMOVE,CLEAR_CART, REMOVE_ITEM } from "./type";

const initialStore = {
  carts: [],
};

// reducer
export const cartReducer = (state = initialStore, action) => {
  switch (action.type) {
    case ADD_CART:
      const itemIndex = state.carts.findIndex((item) => item.id === action.payload.id);
      if (itemIndex >= 0) {
        // If the item already exists in the cart, increase its quantity by 1
        const updatedCarts = [...state.carts];
        updatedCarts[itemIndex].qty += 1;
        return {
          ...state,
          carts: updatedCarts,
        };
      } else {
        // If the item doesn't exist in the cart, add it with a quantity of 1
        const newItem = { ...action.payload, qty: 1 };
        return {
          ...state,
          carts: [...state.carts, newItem],
        };
      }

    case REMOVE:
      // Remove the item with the given id from the cart
      const updatedCartsRemove = state.carts.filter((item) => item.id !== action.payload);
      return {
        ...state,
        carts: updatedCartsRemove,
      };
      // reducers.js



    case CLEAR_CART:
      return {
        ...state,
        carts: [],
      };
    // Add other cases to handle other actions if needed
 



    case REMOVE_ITEM:
      const itemIndexDesc = state.carts.findIndex((item) => item.id === action.payload.id);
      if (itemIndexDesc >= 0 && state.carts[itemIndexDesc].qty > 1) {
        // If the item quantity is greater than 1, decrease its quantity by 1
        const updatedCartsRemoveItem = [...state.carts];
        updatedCartsRemoveItem[itemIndexDesc].qty -= 1;
        return {
          ...state,
          carts: updatedCartsRemoveItem,
        };
      } else {
        // If the item quantity is 1 or less, remove it from the cart
        const updatedCartsRemoveItem = state.carts.filter((item) => item.id !== action.payload.id);
        return {
          ...state,
          carts: updatedCartsRemoveItem,
        };
      }

    default:
      return state;
  }
};
