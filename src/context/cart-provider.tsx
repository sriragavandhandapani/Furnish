"use client";

import { createContext, useReducer, useEffect, type ReactNode } from "react";
import type { CartItem, Product } from "@/types";

type CartState = {
  items: CartItem[];
};

type CartAction =
  | { type: "ADD_ITEM"; payload: Product }
  | { type: "REMOVE_ITEM"; payload: { id: string } }
  | { type: "UPDATE_QUANTITY"; payload: { id:string; quantity: number } }
  | { type: "SET_STATE"; payload: CartState };

export type CartContextType = {
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
};

export const CartContext = createContext<CartContextType | undefined>(undefined);

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case "ADD_ITEM": {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }
      return {
        ...state,
        items: [
          ...state.items,
          {
            id: action.payload.id,
            name: action.payload.name,
            price: action.payload.price,
            image: action.payload.image,
            quantity: 1,
          },
        ],
      };
    }
    case "REMOVE_ITEM": {
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload.id),
      };
    }
    case "UPDATE_QUANTITY": {
      return {
        ...state,
        items: state.items
          .map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: action.payload.quantity }
              : item
          )
          .filter((item) => item.quantity > 0),
      };
    }
    case "SET_STATE": {
        return action.payload;
    }
    default:
      return state;
  }
};


export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });

  useEffect(() => {
    try {
      const storedCart = localStorage.getItem("cart");
      if (storedCart) {
        dispatch({ type: 'SET_STATE', payload: JSON.parse(storedCart) });
      }
    } catch (error) {
      console.error("Failed to parse cart from localStorage", error);
    }
  }, []);
  
  useEffect(() => {
    // only run on client
    if (typeof window !== 'undefined') {
        localStorage.setItem("cart", JSON.stringify(state));
    }
  }, [state]);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
