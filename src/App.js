
import './App.css';
import Cart from './Components/Cart';
import Items from './Components/Items';

function App() {
  return (
    <div className="App">

     <Items name="Mackbook Pro" price ={100000}/>
     <Items name="Pendrive" price ={10000}/>
     <Items name="Ipad" price ={150000}/>
     <Items name="Iphone 16 Pro" price ={100000}/>
     <Cart />
      
    </div>
  );
}

export default App;
