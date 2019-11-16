import React, { Component } from "react";
import "./App.css";
import SomeComponent from './someComponent'
import ReactLoading from 'react-loading'
import Navigation from './NavigationBar'

const someAPI = 'https://jsonplaceholder.typicode.com/posts'

class App extends Component {

  state = {
    someData: [],
    isLoading: true
  }

  componentDidMount() {
    setTimeout(() => {
      this.someFetch()
    }, 1200);
  }

  someFetch = () => {
    fetch(someAPI)
      .then(res => res.json())
      .then(res => this.setState({ 
        someData: res,
        isLoading: false })
    )
  }

  render() {
    return (
      <div className="App">
        <Navigation />
        <header className="App-header">
          {this.state.isLoading ? (
            <div>
              <ReactLoading type={"bars"} color={"grey"} />
            </div> 
            ) : (
            <SomeComponent />
            )
          }
        </header>
      </div>
    );
  }
}

export default App;
