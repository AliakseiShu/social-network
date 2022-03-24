import React from 'react';
import './index.css';
import { RootStateType, store } from "./redux/state";
import ReactDOM from 'react-dom';
import App from './App';

let rerenderEntireTree = (state: RootStateType) => {
  ReactDOM.render(
    <React.StrictMode>
      <App
        state={state}
        dispatch={store.dispatch.bind(store)}
        store={store}
      />
    </React.StrictMode>,
    document.getElementById('root'));
}

rerenderEntireTree(store.getState())

store._subscribe(() => {
  let state = store.getState()
  rerenderEntireTree(state)
})

