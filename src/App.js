import React from 'react';
import './App.css';
import './homelink.css';
import Homepage from './homepage/homepage';
import Finalproject from './finalProject/finalProject';

import {HashRouter as Router, Switch, Route} from "react-router-dom";
import {Link} from "react-router-dom";

function App() {

const baseUrl = process.env.PUBLIC_URL;

  return (


   <Router>
       <div className="App">

           <Link to="/" class="home">
               Home
           </Link>

           <Switch>
               <Route path={baseUrl + '/'} exact component={Homepage}/>
               <Route path={baseUrl + '/finalproject'} exact component={Finalproject}/>
           </Switch>

       </div>
   </Router>

  );
}

export default App;
