import React, {Component} from 'react';
import './App.css';
import Cardlist from "./Cardlist";


const input="";

class App extends Component{
  render (){
    return <div className="App">
      <h1 className={'tc'}>Robofriends</h1>
      {
        input.trim()===""? <h1>There is Nothing to show</h1>:<Cardlist input={input}/>

      }
    </div>
  }
}

export default App;
