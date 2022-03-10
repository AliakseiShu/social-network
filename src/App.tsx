import React from 'react';
import './App.css';
import { Header } from "./components/Header/Header";
import { Navbar } from "./components/Navbar/Navbar";
import { Profile } from "./components/Profile/Profile";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { News } from "./components/News/News";
import { Music } from "./components/Music/Music";
import { Settings } from "./components/Settings/Settings";
import { StateType } from "./redux/state";
import { Dialogs } from "./components/Dialogs/Dialogs";

type PropsType = {
  state: StateType
  addPost: (newPostText: string) => void
  updateNewPostText:(newText: string)=>void
}
const App = (props:PropsType) => {

  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header/>
        <Navbar/>
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/profile/*' element={<Profile profilePage={props.state.profilePage}
                                                       addPost={props.addPost}
                                                       updateNewPostText={props.updateNewPostText}
            />}/>
            <Route path='/dialogs/*' element={<Dialogs dialogsPage={props.state.dialogsPage}/>}/>
            <Route path='/news/*' element={<News/>}/>
            <Route path='/music/*' element={<Music/>}/>
            <Route path='/settings/*' element={<Settings/>}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>)
}
export default App;


