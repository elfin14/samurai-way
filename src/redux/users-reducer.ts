import {ActionTypes, SetUsersType, UserFollowType, UserUnFollowType} from './store';


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
}
const initialState: InitialStateType = {
    users: []
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
        case "SET-USERS":{
            return {
                ...state, users: [...state.users, ...action.users]
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
