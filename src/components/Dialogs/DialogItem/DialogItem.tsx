import React from 'react';
import styles from './../dialogs.module.css';
import {NavLink} from 'react-router-dom';

type DialogItemProps = {
    id: number
    name: string
}

export const DialogItem = (props:DialogItemProps) => {
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





