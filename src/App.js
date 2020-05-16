import React, { Component } from 'react';

import List from './InfiniteList/list';


class App extends Component {
  
 render(){
   return(
   <div className='container'>
     <center><h1>Infinite List of Random Objects</h1></center>
     <hr></hr>
    <div className='col-xs-12'>
    <List></List>
    </div>
     </div>
   )
 }
};
export default App;