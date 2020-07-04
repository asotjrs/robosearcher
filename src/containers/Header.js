import React, {Component} from "react";
import SearchBox from "../components/SearchBox";
import CountButton from '../components/CountButton';
class Header extends Component{
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return false;
    }

    render() {
        return<div>
            <SearchBox onSearchChange={this.props.onSearchChange}/>
            <h1>Robots Searcher</h1>
            <CountButton color={"red"}/>
            <p className={"description f3 dark-red p3"} > to search for new robots , please add new names separated by "," Commas </p>
        </div>

    }


}
export default Header;