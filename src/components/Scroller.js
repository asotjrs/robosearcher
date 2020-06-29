import React, {Component} from "react";

class Scroller extends Component{

shouldComponentUpdate(nextProps, nextState, nextContext) {
  return false;
}

  render() {
  return <div style={{overflowY:'scroll' , border:'5px solid black', height:'600px'  } }>
    {this.props.children}
  </div>;
}
}
export default Scroller;