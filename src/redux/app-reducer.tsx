import {AppThunk} from "./redux-store";
import {getAuthUserData} from "./auth-reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

export type InitializedSuccessType = ReturnType<typeof initializedSuccess>

export type ActionAppTypes =
    InitializedSuccessType

let initialState = {
    initialized: false,
}

export type InitialStateType = typeof initialState

const appReducer = (state: InitialStateType = initialState, action: ActionAppTypes): InitialStateType => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true,
            }
        default:
            return state
    }
}
export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS})

export const initializeApp = (): AppThunk =>
    (dispatch) => {
      let promise = dispatch(getAuthUserData())
       Promise.all( [promise])
           .then(()=> {
            dispatch(initializedSuccess())
        })

    }


export default appReducer