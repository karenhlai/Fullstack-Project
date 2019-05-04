import React from 'react';
import LoginFormContainer from '../session_form/login_form_container';
import SignupFormContainer from '../session_form/signup_form_container';
import { Route, Redirect, Switch, Link } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';
import NavBarSplash from './nav_bar_splash';

class SplashPage extends React.Component {
  render () {
    return (
      <div> 

        <div className="navbarSplash">
          <NavBarSplash />        
        </div>


        <section className="section1">
          <img className="section1img" src="https://i.pinimg.com/originals/ee/41/a3/ee41a360bf1ef5c03a79b73c9220156d.jpg" />
          <div className="loginform">
            <Switch>
              <AuthRoute path="/login" component={LoginFormContainer} />
              <AuthRoute path="/signup" component={SignupFormContainer} />
              {/* <ProtectedRoute path="/" component={GreetingContainer} /> */}
              {/* <Redirect to="/" /> */}
            </Switch>
          </div>
        </section>
      
        AuthRoute path="/" component={}

        <section><h1>Tumblr is so easy to use that it's hard to explain.</h1></section>
        <section><h1>Tumblr is blogs.</h1></section>
        <section><h1>You already know how this works.</h1></section>
        <section><h1>Seriously, put anything you want here.</h1></section>
        <section><h1>Okay, it's not actually hard to explain.</h1></section>
      </div>
    )
  }
}
export default SplashPage;