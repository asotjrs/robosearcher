import React, {Component} from 'react';
import './App.css';
import Cardlist from "../components/Cardlist";
import SearchBox from "../components/SearchBox";
import Scroller from "../components/Scroller";
import ErrorBoundry from "./ErrorBoundry";
import {connect} from 'react-redux';

import {setSearchField,requestRobots} from "../actions";

const mapStateToProps=state=>{
  return {
    searchField: state.searchRobots.searchField,
    input:state.requestRobots.input,
    isPending:state.requestRobots.isPending,
    error:state.requestRobots.error

  }

};
const mapDispatchToProps=dispatch=>{
return {
  onSearchChange: event=>dispatch(setSearchField(event.target.value)),
    onRequestRobots: ()=>dispatch(requestRobots())
}
};

class App extends Component{

  componentDidMount() {
     this.props.onRequestRobots();
  }



  render (){
    const input=this.props.searchField===''? this.props.input:this.props.searchField;
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
