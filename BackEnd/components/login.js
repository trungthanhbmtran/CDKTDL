import React, { useState } from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import Router from 'next/router';
import {Send_Post_RestAPI} from '../Request/imw_request';
import { DH_NOT_SUITABLE_GENERATOR } from 'constants';


class LoginComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
   handleChange(event) {
    this.setState({
        [event.target.name]: event.target.value,
      });
}

  async handleSubmit(event) {
    event.preventDefault();
     let inputPost = {"username" : this.state.username}
     let res = await Send_Post_RestAPI('http://localhost:3001/login',inputPost)
     let data = await res.json();
     console.log(data)
      let {UserName,Pass,User_ID} = data[0];
      console.log(UserName) 
      console.log(Pass)
      console.log(typeof this.state.username);
      console.log(typeof UserName);
      console.log(typeof Pass);
      console.log(UserName.length)
      console.log(this.state.username.length)
     if( this.state.username === UserName.replace(/\s/g,'') && this.state.password === Pass.replace(/\s/g,'')){
       Router.push('/index')
     }else{
       alert('mat khau sai')
       Router.push('/login')
     }
  }
  render() {
    return (
      <div className="limiter">
      <div className="container-login100 page-background">
        <div className="wrap-login100">
          <form className="login100-form validate-form" onSubmit={this.handleSubmit}>
            <span className="login100-form-logo">
              <img alt="" src="../assets/img/logo-2.png" />
            </span>
            <span className="login100-form-title p-b-34 p-t-27">
              Log in
            </span>
            <div className="wrap-input100 validate-input" data-validate="Enter username">
              <input className="input100" type="text" name="username" placeholder="Username" value={this.state.username}
              onChange={this.handleChange} required/>
              <span className="focus-input100" data-placeholder="" />
            </div>
            <div className="wrap-input100 validate-input" data-validate="Enter password" >
              <input className="input100" type="password" name="password" placeholder="Password" value={this.state.password}
              onChange={this.handleChange} required/>
              <span className="focus-input100" data-placeholder="" />
            </div>
            <div className="contact100-form-checkbox">
              <input className="input-checkbox100" id="ckb1" type="checkbox" name="remember-me" />
              <label className="label-checkbox100" htmlFor="ckb1">
                Remember me
              </label>
            </div>
            <div className="container-login100-form-btn">
              <button className="login100-form-btn" >
                Login
              </button>
            </div>
            <div className="text-center p-t-30">
              <a className="txt1" href="forgot_password.html">
                Forgot Password?
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
    )
  }
}
export default LoginComponent;