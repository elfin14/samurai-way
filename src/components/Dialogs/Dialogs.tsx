import React from 'react';
import styles from './dialogs.module.css';
import triangle from './triangle.png'
import {ChangeEvent} from 'react';
import {DialogItem} from './DialogItem/DialogItem';
import {Message} from './Message/Message';
import {DialogsPropsType} from "./DialogsContainer";


//  type DialogsPropsType = {
//     onMessageChange:(newMessage:string)=>void
//     dialogs: Array<DialogsType>,
//     messeges: Array<MessegesType>
//     newMessageText:string
//     addMessage:()=>void
// }

export const Dialogs = (props: DialogsPropsType) => {
    let dialogElements = props.dialogs.dialogs.map((el) =>
            <DialogItem name={el.name} id={el.id} key={el.id} />
    )
    let messageElements = props.messeges.map((el) =>
        <Message message={el.message} key={el.id}/>
    )
    const onMessageChangeHandler =(e:ChangeEvent<HTMLTextAreaElement>)=>{
        let newMessage=e.currentTarget.value
        props.onMessageChange(newMessage)
    }
    const onAddMessage=()=>{
        props.addMessage(props.newMessageText)
    }
    return (
        <>
            <div className={styles.content}>
                <div className={styles.messages_field}>
                    {messageElements}
                </div>
                <textarea onChange={onMessageChangeHandler} value={props.newMessageText}/>
                <button onClick={onAddMessage}>Send</button>
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



