import { combineReducers, createStore } from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";


let rootReducers = combineReducers({
  profilePage:profileReducer,
  dialogsPage:dialogsReducer,
  sidebar:sidebarReducer

})

export type AppStateType = ReturnType<typeof rootReducers>
let store = createStore(rootReducers)

window.store = store
export default store