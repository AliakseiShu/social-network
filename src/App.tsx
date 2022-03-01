import React from 'react';
import './App.css';
import { Header } from "./components/Header/Header";
import { Navbar } from "./components/Navbar/Navbar";
import { DialogItemType, Dialogs, MessageType } from "./components/Dialogs/Dialogs";
import { Profile } from "./components/Profile/Profile";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { News } from "./components/News/News";
import { Music } from "./components/Music/Music";
import { Settings } from "./components/Settings/Settings";
import { MyPostsArrayProps } from "./components/Profile/MyPosts/MyPosts";

type PropsType= {
  posts: MyPostsArrayProps[]
  dialogs: DialogItemType[]
  messages: MessageType[]
}
const App = (props:PropsType) => {

  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header/>
        <Navbar/>
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/profile/*' element={<Profile posts={props.posts}/>}/>
            <Route path='/dialogs/*' element={<Dialogs dialogs={props.dialogs} messages={props.messages} />}/>
            <Route path='/news/*' element={<News/>}/>
            <Route path='/music/*' element={<Music/>}/>
            <Route path='/settings/*' element={<Settings/>}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>)
}
export default App;

/*
<Dialogs/>*/
