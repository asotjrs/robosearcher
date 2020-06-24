import React, {Component} from 'react';
import './App.css';
import Cardlist from "../components/Cardlist";
import SearchBox from "../components/SearchBox";
import Scroller from "../components/Scroller";
import ErrorBoundry from "./ErrorBoundry";
import {connect} from 'react-redux';

import {setSearchField} from "../actions";

const mapStateToProps=state=>{
  return {
    searchField: state.searchField

  }

};
const mapDispatchToProps=dispatch=>{
return {
  onSearchChange: event=>dispatch(setSearchField(event.target.value))
}
};

class App extends Component{
  constructor(props) {
    super(props);
    this.state={
      input:''
    }
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users').then(response=>response.json()).then(result=>{
        const robots=result.map((user)=>{ return user.name; });
        const rob=robots.join(',');
        this.setState({input:rob});

    })
  }



  render (){
    const input=this.props.searchField===''? this.state.input:this.props.searchField;
    return <div className="App tc">
      <h1 className={'tc f1 red'}>Robots Searcher</h1>
      <SearchBox onSearchChange={this.props.onSearchChange}/>
      {
        input.trim()===""? <h1>Type Robots names Separated by comma ','</h1>:<Scroller><ErrorBoundry> <Cardlist input={input}/></ErrorBoundry> </Scroller>

      }
    </div>
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
