import React, {Component} from "react";

class ErrorBoundry extends Component{

    constructor(){
        super();
        this.state={
            hasError:false
        }

    }
    componentDidCatch(error, errorInfo) {
        this.setState({hasError:true})
    }
    render() {
        if (this.state.hasError){
            return <h1>Ooooooooooooops there's been some  errors !!!!!</h1>
        }else
            return this.props.children;


    }


}
export default ErrorBoundry;