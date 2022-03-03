import React from 'react';
import './index.css';
import { addPost, state, subscribe, updateNewPostText } from "./redux/state";
import ReactDOM from 'react-dom';
import App from './App';


let rerenderEntireTree = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App
        state={state}
        addPost={addPost}
        updateNewPostText={updateNewPostText}
      />
    </React.StrictMode>,
    document.getElementById('root'));
}

rerenderEntireTree()
subscribe(rerenderEntireTree)
/*reportWebVitals();*/
