import React from 'react';
import styles from './dialogs.module.css';
import triangle from './triangle.png'
import {ChangeEvent} from 'react';
import {DialogItem} from './DialogItem/DialogItem';
import {Message} from './Message/Message';
import {
    ActionTypes,
    DialogsType,
    MessegesType
} from '../../redux/state';
import {addMessageMessageAC, changeNewMessageAC} from '../../redux/dialogs-reducer';

type DialogsPropsType = {
    dispatch:(action:ActionTypes)=>void
    dialogs: Array<DialogsType>,
    messeges: Array<MessegesType>
    newMessageText:string
}

export const Dialogs = (props: DialogsPropsType) => {
    let dialogElements = props.dialogs.map((el) =>
        <DialogItem name={el.name} id={el.id}/>
    )
    let messageElements = props.messeges.map((el) =>
        <Message message={el.message}/>
    )
    const onMessageChangeHandler =(e:ChangeEvent<HTMLTextAreaElement>)=>{
        let newMessage=e.currentTarget.value
        props.dispatch(changeNewMessageAC(newMessage))
    }
    const addMessage=()=>{
        props.dispatch(addMessageMessageAC(props.newMessageText))
    }
    return (
        <>
            <div className={styles.content}>
                <div className={styles.messages_field}>
                    {messageElements}
                </div>
                <textarea onChange={onMessageChangeHandler} value={props.newMessageText}/>
                <button onClick={addMessage}>Send</button>
                <div className={styles.empty}></div>
                <div className={styles.dialogs}>
                    <div className={styles.dialogs_container}>
                        <div className={styles.title_wrapper}>
                            <div className={styles.title}>Comrades</div>
                            <a href="#" className={styles.triangle_link}>
                                <img src={triangle} alt=""/>
                            </a>
                        </div>
                        <div className={styles.dialogs_wrapper}>
                            {dialogElements}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}



