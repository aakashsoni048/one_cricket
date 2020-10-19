import React from 'react';
import './App.css';
import Home from './pages/Home';
import Shop from './pages/Shop';
import About_us from './pages/About_us';
import Shop_details from './pages/Shop_details';
import Shopping_cart from './pages/Shopping_cart';
import Check_out from './pages/Check_out';
import Blog_details from './pages/Blog_details';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router,Route,Switch,Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Header/>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/Shop' component={Shop} />
            <Route exact path='/About_us' component={About_us} />
            <Route exact path='/Shop_details' component={Shop_details} />
            <Route exact path='/Shopping_cart' component={Shopping_cart} />
            <Route exact path='/Check_out' component={Check_out} />
            <Route exact path='/Blog_details' component={Blog_details} />
            <Route exact path='/Blog' component={Blog} />
            <Route exact path='/Contact' component={Contact} />
          </Switch>
        <Footer/>
      </Router>
      
    </div>
  )
}

export default App;
