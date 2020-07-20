//  node modules
import React, { Component }     from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
// NOTE: to self - Redux is not React-specificic. It can be used with many libraries to manage State.
import { connect }              from 'react-redux';   // react-redux tailors Redux for use with React

//  local modules
import * as actions from '../redux/actions';    // the action creators for redux

//  routing components
import Header  from './Header';
import Landing from './Landing';
const Dashboard = () => <h2>Dashboard</h2>
const SurveyNew = () => <h2>SurveyNew</h2>

// I think if this were a functional component -- (const App = () => {})
// we could replace componentDidMount with useEffect()
// we would then drop the render()
class App extends Component {
  componentDidMount() {
      this.props.fetchUser();     //  fetchUser() is an action creator, connected to the App component as props
  }
  render() {
    return (
      //  configure React Routing
      <div className="container">
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/surveys" component={Dashboard} />
            <Route exact path="/surveys/new" component={SurveyNew} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);     // connect the actions to the App as props (null is used because mapStateToProps is not used)