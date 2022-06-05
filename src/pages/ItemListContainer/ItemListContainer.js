import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";

import ItemList from "../../components/ItemList/ItemList";
import spinner from "../../assets/spinner/spinner.svg";

import "./ItemListContainer.styles.css";

const ItemListContainer = () => {
  const { categoryId } = useParams();

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getItems = (categoryId) => {
    setIsLoading(true);

    const db = getFirestore();

    const itemsCollection = collection(db, "items");

    const q =
      categoryId && query(itemsCollection, where("category", "==", categoryId));

    return getDocs(q || itemsCollection);
  };

  useEffect(() => {
    getItems(categoryId)
      .then((snapshot) => {
        setItems(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [categoryId]);

  return (
    <div className="item__list-container">
      {isLoading ? (
        <div className="spinner-container">
          <img src={spinner} alt="Loading spinner" />
        </div>
      ) : (
        <ItemList items={items} />
      )}
    </div>
  );
};

export default ItemListContainer;
