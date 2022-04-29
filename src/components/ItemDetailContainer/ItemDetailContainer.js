import { useState, useEffect } from 'react';
import itemsMock from '../../data/itemsMock.json';
import ItemDetail from '../ItemDetail/ItemDetail';

import './ItemDetailContainer.styles.css';

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);

  const onAdd = (count, stock) => {
    if (stock === 0) return alert(`No tenemos stock en estos momentos, vuelve en unos días.`);

    return alert(`${count} ${count === 1 ? 'Producto agregado' : 'Productos agregados'} al carrito!`);
  };

  const getItem = () => (
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(itemsMock[0])
      }, 2000)
    })
  )

  useEffect(() => {
    getItem()
      .then(res => setItem(res))
      .catch(err => console.log(err))
  }, [])

  console.log(item);

  return (
    item && (
      <div className='item-detail-container'>
        <ItemDetail item={item} onAdd={onAdd} />
      </div>
    )
  )
}

export default ItemDetailContainer;