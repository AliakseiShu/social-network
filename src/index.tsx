import React from 'react';
import './index.css';
import store, { AppStateType} from "./redux/redux-store";
import ReactDOM from 'react-dom';
import App from './App';

let rerenderEntireTree = (state: AppStateType) => {
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

store.subscribe(() => {
  let state = store.getState()
  rerenderEntireTree(state)
})

