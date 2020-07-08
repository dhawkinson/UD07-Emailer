//  node modules
import React, { Component } from 'react';
import StripeCheckout       from 'react-stripe-checkout';
import { connect }          from 'react-redux';

//  local modules
import * as actions         from '../actions';

class Payments extends Component {
    render() {

        return (
            <StripeCheckout 
                name="EmailerHawk"
                description="Pay $5 for 5 Survey Credits"
                amount={500}
                token={token => this.props.handleToken(token)}
                stripeKey={process.env.REACT_APP_STRIPE_KEY}
            >
                <button className="waves-effect waves-light btn amber darken-1">
                    Add Credits
                </button>
            </StripeCheckout>
        )
    }
}

export default connect(null, actions)(Payments);