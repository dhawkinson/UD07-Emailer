//  node modules
import 'materialize-css/dist/css/materialize.min.css';
import React          from 'react';
import ReactDom       from 'react-dom';
import { Provider }   from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk     from 'redux-thunk';

//  local modules
import App          from './components/App';
import reducers     from './reducers';

//  create redux store
const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDom.render(
    //  connect redux & react through Provider
    <Provider store={store}><App /></Provider>, 
    document.querySelector('#root')
);
