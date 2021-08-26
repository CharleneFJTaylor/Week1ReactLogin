import React, { Component } from 'react';
import './Loginstyle.css';

class Login extends Component {
    state = {clicked: false }

    handleClick =() => {
        this.setState({clicked: !this.state.clicked})
    }

    render() {
        return(
          <form>
            <h3>Log In</h3>
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
            </div>
            <div class="form-check">
              <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
              <label class="form-check-label" for="exampleCheck1">Remember me</label>
            </div>
          <button type="submit" class="btn btn-primary">Submit</button>
          </form>
        )
    }
}

export default Login
