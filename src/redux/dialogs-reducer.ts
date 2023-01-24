import {ActionTypes, AddMessageType, AddNewMessageType} from './store';

export type MessegesType = {
    id: number,
    message: string
}
export type DialogsType = {
    id: number,
    name: string
}
type InitialStateType ={
    newMessageText: string,
    messeges:Array<MessegesType>,
    dialogs:Array<DialogsType>

}
const initialState:InitialStateType ={
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
export const DialogsReducer =(state:InitialStateType = initialState,action:ActionTypes)=>{

    switch (action.type){
        case 'ADD-NEW-MESSAGE':{
            return {...state,
                newMessageText:"",
                messeges: [...state.messeges,{id: 5, message: action.newMessageText,}]}
        }
        case 'CHANGE-NEW-MESSAGE':{
            return {...state, newMessageText:action.newMessage}
        }
        default:
            return state
    }
}
export const changeNewMessageAC=(newMessage:string):AddMessageType =>({type:"CHANGE-NEW-MESSAGE",newMessage:newMessage})
export const addMessageMessageAC=(newMessageText:string):AddNewMessageType =>({type:"ADD-NEW-MESSAGE",newMessageText:newMessageText})