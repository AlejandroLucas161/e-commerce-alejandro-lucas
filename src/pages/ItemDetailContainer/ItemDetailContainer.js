import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import itemsMock from '../../data/itemsMock.json';
import ItemDetail from '../../components/ItemDetail/ItemDetail';
import spinner from '../../assets/spinner/spinner.svg';

import './ItemDetailContainer.styles.css';

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});
  const [isLoading, setIsLoading] = useState(true)

  const getItem = (id) => {
    setIsLoading(true);

    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(itemsMock.find(item => item.id === id)), 2000)
    })
  }

  useEffect(() => {
    getItem(+id)
      .then(res => {
        setItem(res)
        setIsLoading(false)
      })
      .catch(err => console.log(err))
  }, [id])

  return (
    isLoading ? (
      <div className='spinner-container'>
        <img src={spinner} alt="Loading spinner" />
      </div>
    ) : (
      <div className='item-detail-container'>
        <ItemDetail item={item} />
      </div>
    )
  )
}

export default ItemDetailContainer;