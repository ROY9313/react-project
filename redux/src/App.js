import './App.css';
import Cart from './Components/Cart';
import Product from './Components/Product';
import products from './products.json'

function App() {
  return (
    <>
     <div className='App'>
      <Cart/>
      <div className='products'>
        {products.map((product) => (
          <Product {...product} />
        ))}
      </div>
     </div>
    </>
  )
}

export default App;
