import NavBar from './components/NavBar/NavBar';
import itemsMock from './data/itemsMock.json'
import ItemListContainer from './pages/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './pages/ItemDetailContainer/ItemDetailContainer';

import { Routes, Route } from 'react-router-dom';


function App() {
  console.log(itemsMock);

  return (
    <div className="App">
      <NavBar />

      <main>
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/item/:id' element={<ItemDetailContainer />} />
          <Route path='/category/:categoryId' element={<ItemListContainer />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
