import React, {Component} from 'react';
import './MainPage.css';
import Cardlist from "../components/Cardlist";
import Scroller from "../components/Scroller";
import ErrorBoundry from "../containers/ErrorBoundry";
import Header from "../containers/Header";




class MainPage extends Component{



    render (){
        const robots=this.props.searchField===''? this.props.robots:this.props.searchField;

        return <div className="App tc">
            <Header onSearchChange={this.props.onSearchChange}/>
            {
                robots.trim()===""? <h1>Type Robots names Separated by "," Commas </h1>:
                    <Scroller><ErrorBoundry> <Cardlist robots={robots}/></ErrorBoundry> </Scroller>

            }
        </div>
    }
}

export default MainPage;
