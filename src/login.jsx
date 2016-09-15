import React, { Component } from 'react';
import { browserHistory } from 'react-router';

class Login extends Component {
  constructor() {
    super();
    this.state = {};
    this.sendCreds = this.sendCreds.bind(this);
  }
  sendCreds(e) {
    e.preventDefault();
    let newState = {
      username: e.target.elements[0].value,
      password: e.target.elements[1].value
    };
    this.setState = (newState);
    console.log('hit submit with these events - ', newState);
    const path = `/yohdl/rooms`
    browserHistory.push(path)

  }
  render() {
    return (
      <div>
        <h1>Login</h1>
          <form onSubmit={this.sendCreds}>
            <input type="text" placeholder="username" value={this.state.username}/>
            <input type="text" placeholder="password" value={this.state.password}/>
            <button type="submit">submit</button>
          </form>
      </div>
    );
  }
}

export default Login;
