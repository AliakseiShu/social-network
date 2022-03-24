import React from 'react';
import './App.css';
import { Header } from "./components/Header/Header";
import { Navbar } from "./components/Navbar/Navbar";
import { Profile } from "./components/Profile/Profile";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { News } from "./components/News/News";
import { Music } from "./components/Music/Music";
import { Settings } from "./components/Settings/Settings";
import { ActionsTypes, RootStateType, StoreType } from "./redux/state";
import { Dialogs } from "./components/Dialogs/Dialogs";

type PropsType = {
  state: RootStateType
  store: StoreType
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
                     profilePage={props.state.profilePage}
                     dispatch={props.dispatch}
                   />}/>
            <Route path='/dialogs/*' element={<Dialogs
              store={props.store}
              dialogsPage={props.state.dialogsPage}
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


