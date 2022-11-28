import {ActionTypes, AddMessageType, AddNewMessageType, DialogsPageType} from './state';

export const DialogsReducer =(state:DialogsPageType,action:ActionTypes)=>{
    switch (action.type){
        case 'ADD-NEW-MESSAGE':
            const NewMessage = {
                id: 5,
                message: action.newMessageText,
            }
            state.messeges.push(NewMessage)
            state.newMessageText = ''
            return state
        case 'CHANGE-NEW-MESSAGE':
            state.newMessageText = action.newMessage
            return state
        default:
            return state
    }
}
export const changeNewMessageAC=(newMessage:string):AddMessageType =>({type:"CHANGE-NEW-MESSAGE",newMessage:newMessage})
export const addMessageMessageAC=(newMessageText:string):AddNewMessageType =>({type:"ADD-NEW-MESSAGE",newMessageText:newMessageText})