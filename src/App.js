import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import itemsMock from './data/itemsMock.json'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


function App() {
  console.log(itemsMock);

  return (
    <div className="App">
      <NavBar />

      <main>
        <ItemListContainer />
        <ItemDetailContainer />
      </main>
    </div>
  );
}

export default App;
