import { useState } from 'react';
import './App.css';
import Cardlist from './Components/Cardlist/Cardlist';
import Cart from './Components/Cart/Cart';
import Header from './Components/Header/Header';

function App() {

const [order, setOrder] = useState([]);
console.log(order);
  return (
    <div className="App">
      <Header/>
      <Cardlist setOrder = {setOrder} order = {order}/>
      <Cart order = {order}/>
    </div>
  );
}

export default App;
