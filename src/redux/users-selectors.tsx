import {AppStateType} from "./redux-store";
import {createSelector} from "reselect";

export const getUsersSelector = (state: AppStateType) => {
    return state.usersPage.users
}

export const getUsers = createSelector(getUsersSelector,(users)=>{
    return users.filter( u => true)
})
export const getUser = createSelector(getUsersSelector,(user)=>{
    return user
})

export const getPageSize = (state: AppStateType) => {
    return state.usersPage.pageSize
}
export const getPortionSize = (state: AppStateType) => {
    return state.usersPage.portionSize
}

export const getTotalUsersCount = (state: AppStateType) => {
    return state.usersPage.totalUsersCount
}

export const getCurrentPage = (state: AppStateType) => {
    return state.usersPage.currentPage
}

export const getIsFetching = (state: AppStateType) => {
    return state.usersPage.isFetching
}

export const getFollowingInProgress = (state: AppStateType) => {
    return state.usersPage.followingInProgress
}