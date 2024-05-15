import './index.css'
import Home from './pages/Home';
import Nav from './components/Nav'
import Footer from './components/Footer';
import Books from './pages/Books';
import { books } from './data'
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Route path="/" exact component={Home}>
          <Home />
        </Route>
        <Route path="/books" render={() => <Books books={books} />}>
          <Books />
        </Route>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
