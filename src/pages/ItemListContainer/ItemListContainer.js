import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import itemsMock from '../../data/itemsMock.json';
import ItemList from '../../components/ItemList/ItemList';
import spinner from '../../assets/spinner/spinner.svg';

import './ItemListContainer.styles.css'

const ItemListContainer = () => {
  const { categoryId } = useParams();
  console.log(categoryId);

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getItems = (categoryId) => {
    setIsLoading(true);

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(categoryId ? itemsMock.filter(item => item.category === categoryId) : itemsMock)
      }, 2000)
    })
  }

  useEffect(() => {
    getItems(categoryId)
      .then(res => {
        setItems(res);
        setIsLoading(false);
      })
      .catch(err => console.log(err))
  }, [categoryId])

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