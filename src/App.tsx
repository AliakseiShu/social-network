import React from 'react';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import HeaderContainer from "./components/Header/HeaderContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import Login from "./components/Login/Login";

const App = () => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Switch>
                        <Route path='/profile/:userId?' component={() => <ProfileContainer/>}/>
                        <Route path='/dialogs/' component={() => <DialogsContainer/>}/>
                        <Route path='/news/' component={() => <News/>}/>
                        <Route path='/music/' component={() => <Music/>}/>
                        <Route path='/settings/' component={() => <Settings/>}/>
                        <Route path='/users/' component={() => <UsersContainer/>}/>
                        <Route path='/login/' component={() => <Login/>}/>
                    </Switch>
                </div>
            </div>
        </BrowserRouter>)
}
export default App;


