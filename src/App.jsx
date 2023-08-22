import { products } from './mocks/products.json';
import { Products } from './components/Products.jsx';

function App() {
  return (
    <>
      <Products products={products} />
      <h1>Hola</h1>
    </>
  );
}

export default App;
