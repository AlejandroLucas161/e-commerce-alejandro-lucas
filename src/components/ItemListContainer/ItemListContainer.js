import { useState, useEffect } from 'react';

import itemsMock from '../../data/itemsMock.json';
import ItemList from '../ItemList/ItemList';
import spinner from '../../assets/spinner/spinner.svg';

import './ItemListContainer.styles.css'

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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
      {isLoading ? (
        <div className='spinner-container'>
          <img src={spinner} alt="Loading spinner" />
        </div>
      ) : (
        <ItemList items={items} />
      )}
    </div>
  )
}

export default ItemListContainer;