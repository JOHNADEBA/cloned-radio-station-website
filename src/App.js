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

   let time
    let image
    let name
    const date = new Date ()
  const hour = date.getHours()


  if(hour > 22 && hour <=24 ){
      image = 'https://picsum.photos/200'
      time = '10:00pm-Midnight'
      name = 'LIVE AND DANGEROUS'

  }else if(hour > 24 && hour <=3){
    image = 'https://picsum.photos/200'
    time = 'Midnight - 3:00am'
    name = 'Chat Station'
    

  }else if(hour > 3 && hour <=4){
    image = 'https://picsum.photos/200'
    time = '3:00am - 4:00am'
    name = 'Sunny Side Repeat'
   

  }else if(hour > 4 && hour <=5){
    image = 'https://picsum.photos/200'
    time = '4:00am - 5:00am'
    name = 'Hard Facts Repeat'
    

  }else if(hour > 5 && hour <=9){
    image = 'https://picsum.photos/200'
    time = '5:00am - 9:00am'
    name = 'Hard Facts Repeat'

  }else if(hour > 9 && hour <= 12){
    image = 'https://picsum.photos/200'
    time = '9:00am - Noon'
    name = 'Hard Facts Repeat'

  }else if(hour > 12 && hour <=15){
    image = 'https://picsum.photos/200'
    time = 'Noon - 3:00pm'
    name = 'Sunny Side'

  }else if(hour > 15 && hour <=16){
    image = 'https://picsum.photos/200'
    time = '3:00pm - 4:00pm'
    name = 'HARD FACTS'

  }else if(hour > 16 && hour <=19){
    image = 'https://picsum.photos/200'
    time = '4:30pm - 7:00pm'
    name = 'HARD FACTS'

  }else if(hour > 19 && hour <=22){
    image = 'https://picsum.photos/200'
    time = '7:00pm - 10:00pm'
    name = 'GAME ON'

  }else {
    image = 'https://picsum.photos/200'
    time = 'Chilling time'
    name = 'Chilling...'

  }
  return (
    <Router>
    <div className="App">
    <Header  name={name} time={time} image={image}/>

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
          <Listen name={name} time={time} image={image} />
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
