const React = require('react');
const ReactDOM = require('react-dom');
const Home = require('home');
const Nav = require('nav');
const Account = require('account');
const Transaction = require('transaction');
const Main = require('main');
const {Route, BrowserRouter} = require('react-router-dom');
const {Provider} = require('react-redux');
const redux = require('redux');

var username = (state = null, action) => {
    switch(action.type){
        case 'LOG_IN':
            return action.username;
        case 'LOG_OUT':
            return null;
        default:
            return state;
    }
};
var reducer = redux.combineReducers({username});
var store = redux.createStore(reducer);
store.dispatch({type: 'LOG_IN', username: 'Nguyen Trung Hau'});
store.dispatch({type: 'LOG_OUT'});

//
var requireLogin = (nextState, replace, next) => {
    if (store.getState().username === null)
    {
        replace({ pathname: '/' });
        
    }
    next();
};



ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <h1>Home</h1>
                <Nav/>
                <Route exact path="/" component={Home}/>
                <Route  path="/account" component={Account}/>
                <Route  path="/transaction" component={Transaction}/>
            </div>
        </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);