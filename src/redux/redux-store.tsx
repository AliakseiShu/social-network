import { combineReducers, createStore } from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";


let rootReducers = combineReducers({
  profilePage:profileReducer,
  dialogsPage:dialogsReducer,
  sidebar:sidebarReducer,
  usersPage:usersReducer
})

export type AppStateType = ReturnType<typeof rootReducers>

let store = createStore(rootReducers)


// @ts-ignore
window.store = store
export default store