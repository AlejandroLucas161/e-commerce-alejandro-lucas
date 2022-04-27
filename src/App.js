import './App.css';

import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import itemsMock from './data/itemsMock.json'


function App() {
  console.log(itemsMock);

  return (
    <div className="App">
      <NavBar />
      
      <main>
        <ItemListContainer greeting='¡Bienvenido a Clothy!' />
      </main>
    </div>
  );
}

export default App;
