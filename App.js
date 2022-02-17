import React from "react";
import Home from "./Home";
import './App.css';
import Header from './Header';
import Checkout from "./Checkout";
import { BrowserRouter as Router,Switch, Route}
from 'react-router-dom';



function App() {
  return(
    // <BrowserRouter>
    // <div className="app">
    // <Header />
    //   <Routes>
    //   <Route path="/checkout">
    //     <Checkout/>
    //     </Route>
    //     <Route path="/">
    //     <Home />
    //     </Route>
    //   </Routes>
    // </div>
    // </BrowserRouter>

    
    <Router>
      <div className="app">
        <Header/>
        <Switch>
          <Route path="/checkout">
          <Checkout/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
    
   

    );
  
}

export default App;
