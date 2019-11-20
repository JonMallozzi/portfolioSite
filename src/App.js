import React from 'react';
import './App.css';
import './homelink.css';
import Homepage from './homepage/homepage';
import Finalproject from './finalProject/finalProject';

import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {Link} from "react-router-dom";

function App() {
  return (

   <Router>
       <div className="App">

           <Link to="/" class="home">
               Home
           </Link>

           <Switch>
               <Route path="/" exact component={Homepage}/>
               <Route path="/finalproject" exact component={Finalproject}/>
           </Switch>

       </div>
   </Router>

  );
}

export default App;
