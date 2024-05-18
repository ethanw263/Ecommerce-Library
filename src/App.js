import React, { useEffect, useState } from 'react';
import './index.css'
import Home from './pages/Home';
import Nav from './components/Nav'
import Footer from './components/Footer';
import Books from './pages/Books';
import BookInfo from './pages/BookInfo';
import { books } from './data'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Cart from './pages/Cart';

function App() {
  const [cart, setCart] = useState([])

  function addToCart(book) {
    setCart([...cart, {...book, quantity: 1}])
  }

  function changeQuantity(book, quantity) {
    setCart(cart.map(item => {
      if (item.id === book.id) {
        return {
          ...item,
          quantity: +quantity,
        }
      } else {
        return item
      }
    }))
  }

  function removeItem(item) {
    setCart(cart.filter(book => book.id !== item.id))
  }

  function numberOfItems() {
    let counter = 0;
    cart.forEach(item => {
      counter += item.quantity
    })
    return counter
  }

  useEffect(() => {
    
  }, [cart])

  return (
    <Router>
      <div className="App">
        <Nav numberOfItems={numberOfItems()}/>
        <Route path="/" exact component={Home} />
        <Route path="/books" exact render={() => <Books books={books} />} />
        <Route path="/books/:id" render={() => <BookInfo books={books} addToCart={addToCart} cart={cart}/>} />
        <Route path="/cart" render={() => <Cart books={books} cart={cart} changeQuantity={changeQuantity} removeItem={removeItem} />} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;


    // const dupeItem = cart.find(item => +item.id === +book.id)
    // if (dupeItem) {
    //   setCart(
    //     cart.map((item) => {
    //       if (item.id === dupeItem.id) {
    //         return {
    //           ...item,
    //           quantity: item.quantity + 1,
    //         }
    //       } else {
    //         return item
    //       }
    //     })
    //   )
    // } else {
    //   setCart([...cart, {...book, quantity: 1}])
    // }