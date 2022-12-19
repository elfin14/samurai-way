import {ActionTypes, AddMessageType, AddNewMessageType, DialogsPageType} from './store';

const initialState ={
    newMessageText:'',
    messeges: [
        {id: 1, message: 'Hi NIGGA!!!'},
        {id: 2, message: 'Yoo NIGGA!!!'},
        {id: 3, message: 'What about bottle of Rum'},
    ],
    dialogs: [
        {id: 1, name: 'Marsel'},
        {id: 2, name: 'Murdon'},
        {id: 3, name: 'Black Eye'},
        {id: 4, name: 'Mbopo'},
    ]
}
export const DialogsReducer =(state:DialogsPageType = initialState,action:ActionTypes)=>{
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