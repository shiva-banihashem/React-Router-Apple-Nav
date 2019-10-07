import React from 'react';

import './App.css';
import {Route } from "react-router-dom";
import { Apple, Mac, Ipad,Iphone,Watch,TV,Music,Support,Search,Bag, Navigation } from './components';
function App() {
  return (
    <div>
      {/* <header className="headerWrap">
        <nav>
          <a href="">apple</a>
          <a href="">Mac</a>
          <a href="">Ipad</a>
          <a href="">Iphone</a>
          <a href="">Watch</a>
          <a href="">TV</a>
          <a href="">Music</a>
          <a href="">Support</a>
          <a href="">search</a>
          <a href="">bag</a>
        </nav>
      </header> */}
      <div>
    <Navigation />
    
    
    <Route exact path="/" component={Apple} />
    <Route exact path="/mac" component={Mac} />
    <Route exact path="/ipad" component={Ipad} />
    <Route exact path="/iphone" component={Iphone} />
    <Route exact path="/watch" component={Watch} />
    <Route exact path="/tv" component={TV} />
    <Route exact path="/music" component={Music} />
    <Route exact path="/support" component={Support} />
    <Route exact path="/search" component={Search} />
    <Route exact path="/bag" component={Bag} />
  </div>
    </div>
  );
}

export default App;
