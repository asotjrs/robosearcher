import React, {Component} from 'react';
import './App.css';
import Cardlist from "../components/Cardlist";
import Scroller from "../components/Scroller";
import ErrorBoundry from "./ErrorBoundry";
import {connect} from 'react-redux';

import {setSearchField,requestRobots} from "../actions";
import Header from "./Header";

const mapStateToProps=state=>{
  return {
    searchField: state.searchRobots.searchField,
    robots:state.requestRobots.robots,
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
    const robots=this.props.searchField===''? this.props.robots:this.props.searchField;
    return <div className="App tc">
      <Header onSearchChange={this.props.onSearchChange}/>
      {
        robots.trim()===""? <h1>Type Robots names Separated by comma ','</h1>:<Scroller><ErrorBoundry> <Cardlist robots={robots}/></ErrorBoundry> </Scroller>

      }
    </div>
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
