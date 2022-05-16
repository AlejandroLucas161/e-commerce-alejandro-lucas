import { createContext, useContext, useState } from "react";

export const CartContext = createContext({});

export const useCartContext = () => useContext(CartContext);


const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const isInCart = (id) => cartList.some(item => item.id === id);


  const addItem = (item, quant) => {
    if (isInCart[item.id]) {
      return setCartList(cartList.map(product => product.id === item.id ? { ...product, quant: product.quant + item.quant } : product));
    };
    setCartList([...cartList, { ...item, quant }]);
  };

  const removeItem = (id) => setCartList(cartList.filter(item => item.id !== id))


  const clearCart = () => setCartList([]);

  const totalItems = () => cartList.reduce((total, item) => total + item.quant, 0)

  const totalPrice = () => cartList.reduce((total, item) => total + (item.quant * item.price), 0)


  return (
    <CartContext.Provider value={{
      cartList,
      addItem,
      removeItem,
      clearCart,
      totalItems,
      totalPrice,
    }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider;


