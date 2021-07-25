import React from 'react';
import {Switch,Route} from 'react-router-dom'

function App() {
  return <Switch>
   <Route exact path = "/">
    t his is 
   </Route >
   <Route exact path = "/page1">
    this is  page1
   </Route >
   <Route exact path = "/page2">
    this is  page2
   </Route >
   <Route >
    eroor page not found 
   </Route >
  </Switch>
  
  
}

export default App;
