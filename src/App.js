import React from 'react';
import logo from './logo.svg';
import books from './books.jpg'
import friends from './tom-and-jerry.jpg'
import './App.css';

class App extends React.Component {
  submitClicked = () =>{
    
 }
  render(){
    return(
      <div className="App">
        <div className="header">
            <header id="title"><b>Welcome to Joyce's Todolist</b><img id="headerLogo" src={books} alt="books"/></header>
            <br></br>
        </div>
        <div className="loginContainer">
            <h1 id="loginSign">Log in</h1>
            <h1 className="inputText">Username :<input type="text" id="usernameInput" className="inputBox"></input></h1>
            <h1 className="inputText">Password : <input type="text" id="passwordInput" className="inputBox"></input></h1>
            <br></br>
            <textarea id="messageArea"></textarea>
            <br></br>
            <br></br>
            <button id="submit" onClick={this.submitClicked}>Submit</button>
            <br></br>
        </div> 
        <br></br>
        <br></br>
        <br></br>
        <img id="funImage" src={friends} alt="friends"></img>
      </div>
    );
  }
}

export default App;
