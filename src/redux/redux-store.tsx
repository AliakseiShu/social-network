import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from 'redux-form'

let rootReducers = combineReducers({
  profilePage:profileReducer,
  dialogsPage:dialogsReducer,
  sidebar:sidebarReducer,
  usersPage:usersReducer,
  auth: authReducer,
  form: formReducer

})

export type AppStateType = ReturnType<typeof rootReducers>

let store = createStore(rootReducers, applyMiddleware(thunkMiddleware))


// @ts-ignore
window.store = store
export default store