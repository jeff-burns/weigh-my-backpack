import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import thunks from 'redux-thunk';
import reducers from './reducers';
import Firebase from './Firebase';
import Router from './Router';

const logger = createLogger({
    // ...options
});
const store = createStore(reducers, {}, applyMiddleware(logger, thunks));

export default class App extends Component {
    componentWillMount() {
        Firebase.initialize();
    }

    render() {
        return (
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
}
