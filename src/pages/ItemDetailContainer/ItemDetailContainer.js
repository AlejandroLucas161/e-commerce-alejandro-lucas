import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import spinner from "../../assets/spinner/spinner.svg";

import "./ItemDetailContainer.styles.css";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const getItem = id => {
    setIsLoading(true);

    const db = getFirestore();

    const itemRef = doc(db, "items", id);

    return getDoc(itemRef);
  };

  useEffect(() => {
    getItem(id)
      .then(snapshot => {
        setItem({ ...snapshot.data(), id: snapshot.id });
        setIsLoading(false);
      })
      .catch(err => console.log(err));
  }, [id]);

  return isLoading ? (
    <div className="spinner-container">
      <img src={spinner} alt="Loading spinner" />
    </div>
  ) : (
    <div className="item-detail-container">
      <ItemDetail item={item} />
    </div>
  );
};

export default ItemDetailContainer;
