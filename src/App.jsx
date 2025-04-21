import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlusMinus } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { CartProvider } from './components/core/CartContext'

import Navbar from "./components/core/Navbar"
import Home from './components/pages/Home'
import Products from './components/pages/Products'
import ProductDetails from './components/pages/ProductDetails'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import Cart from './components/pages/Cart'
import NotFound from './components/pages/NotFound'

import './styles/main.scss'

function App() {
  library.add(faPlusMinus, faCartShopping);

  return (
    <div className="app-container">
      <CartProvider>
        <BrowserRouter>
          <Navbar />
          <main className="main-content">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/shop" component={Products} />
              <Route path="/products/:id" component={ProductDetails} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/cart" component={Cart} />
              <Route component={NotFound} />
            </Switch>
          </main>
        </BrowserRouter>
      </CartProvider>
      <ToastContainer position="top-right" autoClose={1000} />
    </div>
  )
}

export default App
