import React, {Component} from 'react';
import LoginRegister from './components/LoginRegister';
import Home from './components/Home';
import fire from './config/Fire';
import './App.css';
import Spinner from './assets/loader.gif';

class App extends Component{

  constructor(){
    super();
    this.state = {
      user: null,
      loading: true
    }
  }

  componentDidMount(){
    this.authListener();
    setTimeout(function() {
      this.setState({
        loading: false
      });
    }.bind(this), 1000);
  }

  authListener(){
    fire.auth().onAuthStateChanged((user) => {
      if(user){
        this.setState({user});
      }else{
        this.setState({user:null});
      }
    });
  }

  render(){
    if (this.state.loading){
      return (
        <div className="Spinner">
          <img src={Spinner} alt="Spinner" />
        </div>);
  }
    return (
        <div>
          {this.state.user ? (<Home />) : (<LoginRegister />)}
        </div>
    );
  }

}

export default App;
