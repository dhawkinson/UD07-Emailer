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
                        <li><a href="/auth/facebook"><img alt="Facebook" src="/images/facebook.png"/></a></li>
                        <li><a href="/auth/linkedin"><img alt="LinkedIn" src="/images/linkedin.png"/></a></li>
                    </ul>
                );            
            default:
                return (
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><Payments /></li>
                        <li className="amber-text" style={{ margin: '0px 10px' }}>
                            Credits: {this.props.auth.credits}
                        </li>
                        <li><a className="amber-text" href="/api/logout">Logout</a></li>
                    </ul>
                );
        }
    }
    render() {
        return (
            <nav>
                <div className="nav-wrapper blue darken-4">
                    <Link 
                        to={this.props.auth ? '/surveys' : '/'} 
                        className="left brand-logo amber-text">
                        <img className="responsive-img" id="logo" src="/images/atSign.jpeg" alt="logo"/>
                        EmailerHawk
                    </Link>
                    {this.renderContent()}
                </div>
            </nav>
        );
    }
}

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps)(Header);