import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import authReducer, {ActionAuthTypes} from "./auth-reducer";
import thunkMiddleware, {ThunkAction} from "redux-thunk";
import {reducer as formReducer} from 'redux-form'
import appReducer, {ActionAppTypes} from "./app-reducer";
import {composeWithDevTools} from "redux-devtools-extension";

let rootReducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app:appReducer,
    form: formReducer
})

export type AppStateType = ReturnType<typeof rootReducers>

const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(thunkMiddleware)));

type ActionAllThunkType = ActionAuthTypes | ActionAppTypes

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,AppStateType,unknown, ActionAllThunkType>

// @ts-ignore
window.store = store
export default store