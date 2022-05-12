import { createContext, useState } from 'react';

const CartContext = createContext({
  itemList: [],
  addItem: () => {},
  removeItem: () => {},
  clearCart: () => {},
  isInCart: () => {},
});

export const CartContextProvider = ({ children }) => {
  const [itemList, setItemList] = useState([]);

  console.log(itemList);

  const addItem = (product) => {
    const itemInCart = isInCart(product.id);

    if(itemInCart !== -1) {
      setItemList(itemList.map(item => item.id === product.id ? {...item, quant: item.quant + product.quant}  : item))
    } else {
      setItemList([product, ...itemList])
    }
  };

  const removeItem = (id) => {
    const itemToRemove = isInCart(id);
    if(itemList[itemToRemove].quant === 1) {
      setItemList(itemList.filter(item => item.id !== id))
    } else {
      setItemList(itemList.map(item => item.id === id ? {...item, quant: item.quant - 1} : item));
    }

  };

  const clearCart = () => setItemList([]);

  const isInCart = (id) => {
    const itemInCart = itemList.findIndex(item => item.id === id);
    console.log(itemInCart);
    return itemInCart;
  };

  return(
    <CartContext.Provider value={{
      itemList,
      addItem,
      removeItem,
      clearCart,
      isInCart,
    }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContext;