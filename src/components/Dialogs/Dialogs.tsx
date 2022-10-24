import React from 'react';
import styles from './dialogs.module.css';
import triangle from './triangle.png'
import {NavLink} from 'react-router-dom';

type DialogItemProps = {
    id: number
    name: string
}
type MessageItemProps = {
    message: string
}
const DialogItem = (props:DialogItemProps) => {
    return (
        <div className={styles.dialogItem}>
            <NavLink className={styles.link} to={"/dialogs/" + props.id}>
                <img
                    src="https://cdnn21.img.ria.ru/images/103116/49/1031164918_0:0:2000:1126_1920x0_80_0_0_7b75a3ebf8021ae0790a915cfe76e0d0.jpg"
                    alt=""/>
                <p className={styles.name}>{props.name}</p>
            </NavLink>
        </div>
    )
}
const Message =(props:MessageItemProps)=>{
    return(
        <div className={styles.messeges}>
           <p>{props.message}</p>
        </div>
    )
}
export const Dialogs = () => {
    return (
        <>
            <div className={styles.content}>
                <div className={styles.messages_field}>
                    <Message message ="Hi NIGGA!!!"/>
                    <Message message ="Yoo NIGGA!!!"/>
                    <Message message ="What about bottle of Rum"/>
                </div>
                <div className={styles.empty}></div>
                <div className={styles.dialogs}>
                    <div className={styles.title_wrapper}>
                        <div className={styles.title}>Comrades</div>
                        <a href="#" className={styles.triangle_link}>
                            <img src={triangle} alt=""/>
                        </a>
                    </div>
                    <div className={styles.dialogs_wrapper}>
                        <DialogItem name="Marsel" id={1} />
                        <DialogItem name="Murdon" id={2} />
                        <DialogItem name="Black Eye" id={3} />
                        <DialogItem name="Marsel" id={4} />
                    </div>
                </div>
            </div>
        </>
    )
}



