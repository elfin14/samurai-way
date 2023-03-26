import {
    ActionTypes,
    SetCurrentPageType,
    setTotalUsersCountType,
    SetUsersType,
    UserFollowType,
    UserUnFollowType
} from './store';


type UserPhotoType = {
    small: string,
    large: string
}
export type UsersType = {
    name: string,
    id: number,
    photos: UserPhotoType,
    status: string,
    followed: boolean

}
type InitialStateType = {
    users: Array<UsersType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
}
const initialState: InitialStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1
}
export const UsersReducer = (state: InitialStateType = initialState, action: ActionTypes) => {

    switch (action.type) {

        case 'FOLLOW': {
            return {
                ...state, users: state.users.map(el => el.id === action.userId ? {...el, followed: true} : el)
            }
        }
        case 'UNFOLLOW': {
            return {
                ...state, users: state.users.map(el => el.id === action.userId ? {...el, followed: false} : el)

            }
        }
        case "SET-USERS": {
            return {
                ...state, users: [...action.users]
            }
        }
        case "SET-CURRENT-PAGE": {
            return {
                ...state, currentPage: action.currentPage
            }
        }
        case "SET-TOTAL_USES_COUNT": {
            return {
                ...state, totalUsersCount: action.totalCount
            }
        }


        default:
            return state
    }
}
export const followAC = (userId: number): UserFollowType => (
    {
        type: "FOLLOW",
        userId
    }
)
export const unfollowAC = (userId: number): UserUnFollowType => (
    {
        type: "UNFOLLOW",
        userId
    }
)
export const setUsersAC = (users: Array<UsersType>): SetUsersType => (
    {
        type: "SET-USERS",
        users
    }
)
export const setCurrentPageAC = (currentPage: number): SetCurrentPageType => (
    {
        type: "SET-CURRENT-PAGE",
        currentPage
    }
)
export const setTotalUsersCountAC = (totalCount: number): setTotalUsersCountType => (
    {
        type: "SET-TOTAL_USES_COUNT",
        totalCount
    }
)
