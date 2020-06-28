import React, {Component} from "react";
import SearchBox from "../components/SearchBox";

class Header extends Component{
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return false;
    }

    render() {
        return<div>
            <SearchBox onSearchChange={this.props.onSearchChange}/>
            <h1>Robots Searcher</h1>
        </div>

    }


}
export default Header;