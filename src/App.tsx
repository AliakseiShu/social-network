import React from 'react';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {HashRouter, Redirect, Route, Switch,} from 'react-router-dom';
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import HeaderContainer from "./components/Header/HeaderContainer";
import UsersContainer from './components/Users/UsersContainer';
import {LoginContainer} from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import store, {AppStateType} from "./redux/redux-store";
import {Preloader} from "./components/common/Preloader/Preloader";

const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"));
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"));

type MapStateToPropsType = {
	initialized: boolean
}

type MapDispatchToProps = {
	initializeApp: () => void
}

export type AppPropsType = MapStateToPropsType & MapDispatchToProps

class App extends React.Component <AppPropsType> {

	catchALlUnhandledErrors = (e: PromiseRejectionEvent) => {
		console.log(e)
	}

	componentDidMount() {
		this.props.initializeApp()
		window.addEventListener("unhandledrejection", this.catchALlUnhandledErrors)
	};

	componentWillMount() {
		window.removeEventListener("unhandledrejection", this.catchALlUnhandledErrors)
	}

	render() {
		if (!this.props.initialized) {
			return <Preloader/>
		}
		return (
			<div className='app-wrapper'>
				<HeaderContainer/>
				<Navbar/>
				<div className='app-wrapper-content'>
					<Switch>
						<Route exact path='/' component={() => <Redirect to={'/profile'}/>}/>
						<Route path='/profile/:userId?' component={() => {
							return <React.Suspense fallback={<Preloader/>}>
								<ProfileContainer/>
							</React.Suspense>
						}}/>
						<Route path='/dialogs/' component={() => {
							return <React.Suspense fallback={<Preloader/>}>
								<DialogsContainer/>
							</React.Suspense>
						}}/>
						<Route path='/news/' component={() => <News/>}/>
						<Route path='/music/' component={() => <Music/>}/>
						<Route path='/settings/' component={() => <Settings/>}/>
						<Route path='/users/' component={() => <UsersContainer/>}/>
						<Route path='/login/' component={() => <LoginContainer/>}/>
						<Route path='*' component={() => <div>404 NOT FOUND</div>}/>
					</Switch>
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
	initialized: state.app.initialized
})

let AppContainer = compose<React.ComponentType>(
	connect(mapStateToProps, {initializeApp}),
)(App)

let SamuraiJSApp = () => {
	return <HashRouter>
		<Provider store={store}>
			<AppContainer/>
		</Provider>
	</HashRouter>
}
export default SamuraiJSApp