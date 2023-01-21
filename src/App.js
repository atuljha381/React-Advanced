import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useEffect } from 'react';
import {useSelector} from 'react-redux'

function App() {
  const cartShow = useSelector(state => state.ui.cartIsVisible)
  const cart = useSelector(state => state.cart)

  useEffect( ()=> {
    fetch('https://redux-advanced-c3df3-default-rtdb.firebaseio.com/cart.json',
    {
      method:'PUT',
      body:JSON.stringify(cart)
    })
  }, [cart])

  return (
    <Layout>
      {cartShow && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
