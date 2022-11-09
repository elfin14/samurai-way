import React from 'react';
import styles from './../dialogs.module.css';


type MessageItemProps = {
    message: string
}

export const Message =(props:MessageItemProps)=>{
    return(
        <div className={styles.messeges}>
           <p>{props.message}</p>
        </div>
    )
}
