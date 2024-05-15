import './index.css'
import Home from './pages/Home';
import Nav from './components/Nav'
import Footer from './components/Footer';
import Books from './pages/Books';
import BookInfo from './pages/BookInfo';
import { books } from './data'
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Route path="/" exact component={Home} />
        <Route path="/books" exact render={() => <Books books={books} />} />
        <Route path="/books/1" render={() => <BookInfo books={books} />} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
