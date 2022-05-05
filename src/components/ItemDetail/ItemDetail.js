import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ item: { name, price, imageUrl, stock } }) => {

  const onAdd = (count, stock) => {
    if (stock === 0) return alert(`No tenemos stock en estos momentos, vuelve en unos días.`);

    return alert(`${count} ${count === 1 ? 'Producto agregado' : 'Productos agregados'} al carrito!`);
  };

  return (
    <div className='item-detail'>
      <div className='item-detail__img-container'>
        <img src={imageUrl} className='item-detail__img' />
      </div>

      <div className="item-detail__content-container">
        <h1 className="item-detail__content-name">{name}</h1>

        <div className='item-detail__content-info'>
          <span className="item-detail__content-info-price">Precio: <b>{price}</b></span>
          <span className="item-detail__content-info-stock">Stock: <b>{stock}</b></span>
        </div>

        <ItemCount initial={1} stock={stock} onAdd={onAdd} />
      </div>
    </div>
  )
}

export default ItemDetail;