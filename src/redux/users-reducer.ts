import {ActionTypes, SetUsersType, UserFollowType, UserUnFollowType} from './store';


type UserLocationType = {
    country: string,
    city: string
}
export type UsersType = {
    id: number,
    photoURL: string,
    followed: boolean,
    fullname: string,
    status: string
    location: UserLocationType
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
