import Header from './components/Header'
import Home from './components/Home'
import News from './components/News'
import Presenters from './components/Presenters'
import Podcasts from './components/Podcasts'
import Contact from './components/Contact'
import Listen from './components/Listen'
import Footer from './components/Footer'
import 'tachyons'
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";



import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
    <Header />

    <Switch>
        <Route path="/abuja">
          <Home />          
        </Route>
        <Route path="/portharcourt">
          <Home />
        </Route>
        <Route path="/news">
          <News />
        </Route>
        <Route path="/podcast">
          <Podcasts />
        </Route>
        <Route path="/presenters">
          <Presenters />
        </Route>
        <Route path="/contact">
          <Contact />
          </Route>
        <Route path="/listen">
          <Listen />
        </Route>
        
        <Route path="/">
          <Home />
        </Route>
    </Switch>

    <Footer />
    </div>
    </Router>
  );
}

export default App;
