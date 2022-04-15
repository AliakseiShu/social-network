const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';


export type FollowType = ReturnType<typeof follow>
export type UnfollowType = ReturnType<typeof unfollow>
export type SetUsersType = ReturnType<typeof setUsers>
export type SetCurrentPageType = ReturnType<typeof setCurrentPage>
export type SetTotalUsersCountType = ReturnType<typeof setTotalUsersCount>
export type ToggleIsFetchingType = ReturnType<typeof toggleIsFetching>


type ActionUsersTypes = FollowType
  | UnfollowType
  | SetUsersType
  | SetCurrentPageType
  | SetTotalUsersCountType
  | ToggleIsFetchingType

type UserLocationType = {
  city: string
  country: string
}
type PhotoType = {
  small: string
  large: string
}

export type UserType = {
  id: number
  photos: PhotoType
  followed: boolean
  name: string
  status: string
  location: UserLocationType
}

let initialState: InitialStateType = {
  users: [],
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true
}
export type InitialStateType = {
  users: UserType[]
  pageSize: number
  totalUsersCount: number
  currentPage: number
  isFetching: boolean
}

const UsersReducer = (state: InitialStateType = initialState, action: ActionUsersTypes): InitialStateType => {

  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return {...u, followed: true}
          }
          return u
        })
      }
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return {...u, followed: false}
          }
          return u
        })
      }
    case SET_USERS: {
      return {...state, users: [...action.users]}
    }
    case SET_CURRENT_PAGE: {
      return {...state, currentPage: action.currentPage}
    }
    case SET_TOTAL_USERS_COUNT: {
      return {...state, totalUsersCount: action.count}
    }
    case TOGGLE_IS_FETCHING: {
      return {...state, isFetching: action.isFetching}
    }

    default:
      return state
  }
}
export const follow = (userId: number) =>
  ({type: FOLLOW, userId: userId} as const)
export const unfollow = (userId: number) =>
  ({type: UNFOLLOW, userId: userId} as const)
export const setUsers = (users: UserType[]) =>
  ({type: SET_USERS, users: users} as const)
export const setCurrentPage = (currentPage: number) =>
  ({type: SET_CURRENT_PAGE, currentPage: currentPage} as const)
export const setTotalUsersCount = (totalCount: number) =>
  ({type: SET_TOTAL_USERS_COUNT, count: totalCount} as const)
export const toggleIsFetching = (isFetching: boolean) =>
  ({type: TOGGLE_IS_FETCHING, isFetching: isFetching} as const)


export default UsersReducer