import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './seasonDisplay';
import './seasonDisplay.css'
import Spinner from './spinner';
import Clock from './clock';


class App extends React.Component
{
    constructor()
    {
        super();
        this.state={lat:null,msg:null};
        
        console.log('iam construtor');
    }

    componentDidMount()
    {
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({lat:position.coords.latitude}),
            (err) => this.setState({msg:err.msg})
        );
        console.log('iam component did mount');
    }

    componentDidUpdate(){
        console.log('iam component did update');
    }
    render()
    {
        console.log('iam render');
        if(this.state.msg && !this.state.lat){
            return <div>Error: {this.state.msg}</div>
        }

        if(!this.state.msg && this.state.lat){
            return (<div>
                <SeasonDisplay lat={this.state.lat}/>
                <Clock />
                </div>);
        }

        return <Spinner />
        
            
        
        
    }
};

ReactDOM.render(<App/>,document.querySelector('#root'));