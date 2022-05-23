import { Fragment, useState } from "react";
import { useCartContext } from "../../store/CartContextProvider";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import spinner from "../../assets/spinner/spinner.svg";
import { Link } from "react-router-dom";

const Checkout = () => {
  const { cartList, totalPrice, clearCart } = useCartContext();
  const [isLoading, setIsLoading] = useState(false);
  const [orderId, setOrderId] = useState(null);

  const [buyer, setBuyer] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const { name, phone, email } = buyer;

  const handleInputChange = (e) => {
    setBuyer({
      ...buyer,
      [e.target.name]: e.target.value,
    });
  };

  const generateOrder = async (data) => {
    setIsLoading(true);
    try {
      const db = getFirestore();
      const orderCollection = collection(db, "orders");
      const order = await addDoc(orderCollection, data);
      setOrderId(order.id);
      clearCart();
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const items = cartList.map((item) => ({
      id: item.id,
      title: item.name,
      price: item.price,
      quantity: item.quant,
    }));
    const day = new Date();
    const total = totalPrice();
    const data = { buyer, items, day, total };

    generateOrder(data);
  };

  return (
    <Fragment>
      <h1>Finalizando Compra</h1>
      {isLoading ? (
        <div className="spinner-container">
          <img src={spinner} alt="Loading spinner" />
        </div>
      ) : (
        !orderId && (
          <Fragment>
            <h4>Completar Datos:</h4>

            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Nombre"
                value={name}
                onChange={handleInputChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={handleInputChange}
                required
              />
              <input
                type="number"
                name="phone"
                placeholder="Telefono"
                value={phone}
                onChange={handleInputChange}
                required
              />
              <input type="submit" value="Finalizar Compra" />
            </form>
          </Fragment>
        )
      )}
      {orderId && (
        <div>
          <h1>Compra finalizada con éxito</h1>
          <h4>{`Código de compra: ${orderId}`}</h4>
          <button>
            <Link to={"/"}>Volver al Inicio</Link>
          </button>
        </div>
      )}
    </Fragment>
  );
};

export default Checkout;
// { buyer: { name, phone, email }, items: [{ id, title, price, amount }], date, total  }
