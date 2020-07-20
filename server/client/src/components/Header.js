//  node modules
import React, { Component } from 'react';
import { connect }          from 'react-redux';
import { Link }             from 'react-router-dom';

//  local modules
import Payments             from './Payments';


class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li className="amber-text" style={{ display: 'inline' }}>Login With: </li>
            <li><a href="/auth/google"><img alt="Google" src="/images/google.png"/></a></li>
          </ul>
        );            
      default:
        return [
          <li key='1'><Payments /></li>,
          <li key='2' className="amber-text" style={{ margin: '0px 10px' }}>
            Credits: {this.props.auth.credits}
          </li>,
          <li key='3'><a className="amber-text" href="/api/logout">Logout</a></li>
        ]
    }
  }
  render() {
    return (
      <nav>
        <div className="nav-wrapper blue darken-4">
          <Link 
            to={this.props.auth ? '/surveys' : '/'} 
            className="left brand-logo amber-text">
            <img className="responsive-img" id="logo" src="/images/icons8-email.png" alt="logo"  style={{ width: '4rem' }}/>
            {' '}Emaily
          </Link>
          <ul className="right">
            {this.renderContent()}
          </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps)(Header);