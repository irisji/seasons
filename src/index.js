import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";


class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {lat:null,err:null};
        
    }

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({lat:position.coords.latitude}),
            (err) => this.setState({err:err.message})
        );
    }
    
    render(){
        
        if (this.state.err && !this.state.lat){
            return <div>Error:{this.state.err}</div>;
        }

        if (this.state.lat && !this.state.err){
            return <SeasonDisplay  lat={this.state.lat}/>;
        }

        return <div>Loading...</div>;
            
    }
};

ReactDOM.render( 
    <App />, 
    document.querySelector('#root')
    );