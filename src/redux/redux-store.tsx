import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import profileReducer, {ActionProfileTypes} from "./profile-reducer";
import dialogsReducer, {ActionDialogsTypes} from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer, {ActionUsersTypes} from "./users-reducer";
import authReducer, {ActionAuthTypes} from "./auth-reducer";
import thunkMiddleware, {ThunkAction} from "redux-thunk";
import {reducer as formReducer} from 'redux-form'
import appReducer, {ActionAppTypes} from "./app-reducer";
import {composeWithDevTools} from "redux-devtools-extension";

//types
export type AppStateType = ReturnType<typeof rootReducers>

type ActionAllThunkType =
	| ActionAuthTypes
	| ActionAppTypes
	| ActionDialogsTypes
	| ActionProfileTypes
	| ActionUsersTypes

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, ActionAllThunkType>

let rootReducers = combineReducers({
	profilePage: profileReducer,
	dialogsPage: dialogsReducer,
	sidebar: sidebarReducer,
	usersPage: usersReducer,
	auth: authReducer,
	app: appReducer,
	form: formReducer
})

const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(thunkMiddleware)));

// @ts-ignore
window.store = store
export default store