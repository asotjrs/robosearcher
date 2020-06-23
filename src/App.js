import React, {Component} from 'react';
import './App.css';
import Cardlist from "./Cardlist";
import SearchBox from "./SearchBox";
import Scroller from "./Scroller";




class App extends Component{
  constructor(props) {
    super(props);
    this.state={
      searchField:'',
      input:''
    }
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users').then(response=>response.json()).then(result=>{
        const robots=result.map((user)=>{ return user.name;
        });
        const rob=robots.join(',');
        this.setState({input:rob});

    })
  }

  onSearchChange=(event)=>{
    console.log(event.target.value);
    this.setState({searchField:event.target.value});
  };

  render (){
    const input=this.state.searchField===''? this.state.input:this.state.searchField;
    return <div className="App tc">
      <h1 className={'tc f1 red'}>Robots Searcher</h1>
      <SearchBox onSearchChange={this.onSearchChange}/>
      {
         input.trim()===""? <h1>Type Robots names Separated by comma ','</h1>:<Scroller><Cardlist input={input}/></Scroller>

      }
    </div>
  }
}

export default App;
