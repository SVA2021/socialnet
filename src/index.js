import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from "../src/redux/state.js";
//import {updateNewPostText} from "../src/redux/state.js";
import reportWebVitals from './reportWebVitals';
//import state from "../src/redux/state.js";

export let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} dispatch={store.dispatch.bind(store)} 
      //updateNewPostText={store.updateNewPostText.bind(store)}
      />
    </React.StrictMode>,
    document.getElementById('root')
  );
}
rerenderEntireTree(store.getState());
store.subscriber(rerenderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
//addPost={store.addPost.bind(store)}