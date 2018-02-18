import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = { passwords: [] };

  componentDidMount() {
    this.getPasswords();
  }

  getPasswords = () => {
    fetch('/api/passwords')
    .then(res => res.json())
    .then(passwords => this.setState({ passwords }))
    .catch(error => console.log(error.message))
    console.log(this.state.passwords.length)
  }

  render() {
    const {passwords}  = this.state;

    return(
      <div className="App">
      {passwords.length ? (
        <div>
          <h1>5 passwords</h1>
          <ul className="passwords">
            {passwords.map((password, index) => {
              <li key={index}>
                {password}
              </li>
            })}
          </ul>
          <button
            className="more"
            onClick={this.getPasswords}>
            Get more
          </button>
        </div>
      ) : (
        <div>
          <h1> No Passwords :(</h1>
          <button
            className="more"
            onClick={this.getPasswords}>
            Try again?
          </button>
        </div>
      )}
      </div>
    );
  }
}

export default App;
