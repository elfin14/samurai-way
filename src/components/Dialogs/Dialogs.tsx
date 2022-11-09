import React from 'react';
import styles from './dialogs.module.css';
import triangle from './triangle.png'
import {DialogItem} from './DialogItem/DialogItem';
import {Message} from './Message/Message';
import {DialogsType, MessegesType} from '../../redux/state';

type DialogsPropsType = {
    dialogs: Array<DialogsType>,
    messeges: Array<MessegesType>
}

export const Dialogs = (props: DialogsPropsType) => {
    let dialogElements = props.dialogs.map((el) =>
        <DialogItem name={el.name} id={el.id}/>
    )
    let messageElements = props.messeges.map((el) =>
        <Message message={el.message}/>
    )
    return (
        <>
            <div className={styles.content}>
                <div className={styles.messages_field}>
                    {messageElements}
                </div>
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



