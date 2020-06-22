import React, {Component} from 'react';
import './App.css';
import Cardlist from "./Cardlist";
import SearchBox from "./SearchBox";




class App extends Component{
  constructor(props) {
    super(props);
    this.state={
      searchField:'test random robots here',
    }
  }

  onSearchChange=(event)=>{
    console.log(event.target.value);
    this.setState({searchField:event.target.value});
  };

  render (){
    const input=this.state.searchField;
    return <div className="App tc">
      <h1 className={'tc f1 red'}>Robofriends</h1>
      <SearchBox onSearchChange={this.onSearchChange}/>
      {
        input.trim()===""? <h1>Type Robots names Separated by space </h1>:<Cardlist input={input}/>

      }
    </div>
  }
}

export default App;
