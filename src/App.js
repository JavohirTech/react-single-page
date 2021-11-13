import React from 'react';
import Home from './components/Home'
import Navs from './components/Nav'
import First from './components/First'
import Second from './components/Second'
import Third from './components/Third'
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

class App extends React.Component{
      render(){
          return   <>
          <BrowserRouter>
          <Navs/>
           <div className="container">
            <Switch>
                  <Route exact path="/" component={Home}/>
                  <Route path="/bir" component={First}/>
                  <Route path="/ikki" component={Second}/>
                  <Route path="/uch" component={Third}/>
            </Switch>
           </div>
          </BrowserRouter>
    
          </>
      }
      
}

export default App