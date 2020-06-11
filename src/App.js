import React, { Component } from 'react';
import './App.css';
import UserInput from "./User/UserInput"
import UserOutput from './User/UserOutput';

class App extends Component {
  state = {
    userName: [
    {name: "Umida"},
    {name: "Baha"},
    {name: "Kriti"}
    ]
  };

  switchNameHandler = (newName) => {
    this.setState({
      userName: [
      {name: newName},
      {name: "Baha"},
      {name: "Kriti"}
      ]
    })
  };

  changeUserNameHandler = (event) => {
    this.setState({
      userName: [
      {name: event.target.value},
      {name: "Baha"},
      {name: "Kriti"}
      ]
    })
  };

  render() {
    return (
      <div className="App">
        <UserOutput 
        name={this.state.userName[0].name} />
        <UserOutput 
        name={this.state.userName[1].name} />
        <UserOutput 
        name={this.state.userName[2].name} />
        <UserInput change={this.changeUserNameHandler}
          value={this.state.userName[0].name}
        />
      </div>
    );
  }
}

export default App;
