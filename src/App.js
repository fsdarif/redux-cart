import './App.css';
import Cart from './components/Cart';
import Shop from './components/Shop';

function App() {
  return (
    <div className="App">
      <header className="App-header container">
        <Shop></Shop>
        <Cart className="cart"></Cart>
      </header>
    </div>
  );
}

export default App;
