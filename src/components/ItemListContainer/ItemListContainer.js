import { useState, useEffect } from 'react';
import itemsMock from '../../data/itemsMock.json';
import ItemList from '../ItemList/ItemList';

import './ItemListContainer.styles.css'

const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const onAdd = (count, stock) => {
    if (stock === 0) return alert(`No tenemos stock en estos momentos, vuelve en unos días.`);

    return alert(`${count} ${count === 1 ? 'Producto agregado' : 'Productos agregados'} al carrito!`);
  };

  const getItems = () => (
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(itemsMock)
      }, 2000)
    })
  )

  useEffect(() => {
    getItems()
      .then(res => {
        setItems(res)
        setIsLoading(false)
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <div className='item__list-container'>
      <h1>{greeting}</h1>

      <ItemList items={items} isLoading={isLoading} onAdd={onAdd} />
    </div>
  )
}

export default ItemListContainer;