import React from 'react';
import {addMessageMessageAC, changeNewMessageAC} from '../../redux/dialogs-reducer';
import {Dialogs} from './Dialogs';
import StoreContext from '../../StoreContext';


export const DialogsContainer = () => {

    return (
        <StoreContext.Consumer>
            {store => {
                const state = store.getState().dialogsPage
                const onMessageChangeHandler = (newMessage: string) => {
                    store.dispatch(changeNewMessageAC(newMessage))
                }
                const addMessage = () => {
                    store.dispatch(addMessageMessageAC(state.newMessageText))
                }
                return (
                    <Dialogs dialogs={state.dialogs} messeges={state.messeges} newMessageText={state.newMessageText}
                             addMessage={addMessage} onMessageChange={onMessageChangeHandler}/>
                )
            }
            }
        </StoreContext.Consumer>


    )
}



