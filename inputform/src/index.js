import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, applyMiddleware, compose} from 'redux'
import rootReducer from './Components/store/reducer/rootReducer'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import {getFirebase, ReactReduxFirebaseProvider} from 'react-redux-firebase'
import {getFirestore, reduxFirestore, createFirestoreInstance} from 'redux-firestore'
import fbConfig from './Components/config/fbConfig'
import firebase from 'firebase/app'
import { composeWithDevTools } from 'redux-devtools-extension';

const rrReact={}


const store =createStore(rootReducer, 
    composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument({getFirestore, getFirebase})),
    reduxFirestore(fbConfig)),
    );
    const rrfProps = {
        firebase,
           config: rrReact,
           dispatch: store.dispatch,
           createFirestoreInstance,   
         }

ReactDOM.render(
    <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
        <App />
    </ReactReduxFirebaseProvider>
    </Provider>, 

document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
