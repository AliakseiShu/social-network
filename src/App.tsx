import React from 'react';
import './App.css';
import { Header } from "./components/Header/Header";
import { Navbar } from "./components/Navbar/Navbar";
import { Profile } from "./components/Profile/Profile";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { News } from "./components/News/News";
import { Music } from "./components/Music/Music";
import { Settings } from "./components/Settings/Settings";
import { ActionsTypes, RootStateType } from "./redux/store";
import { Store } from "redux";
import { DialogsContainer } from "./components/Dialogs/DialogsContainer";

type PropsType = {
  state: RootStateType
  store: Store
  dispatch: (action: ActionsTypes) => void
}
const App: React.FC<PropsType> = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header/>
        <Navbar/>
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/profile/*'
                   element={<Profile
                     store={props.store}
                   />}/>
            <Route path='/dialogs/*' element={<DialogsContainer
              store={props.store}
            />}/>
            <Route path='/news/*' element={<News/>}/>
            <Route path='/music/*' element={<Music/>}/>
            <Route path='/settings/*' element={<Settings/>}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>)
}
export default App;


