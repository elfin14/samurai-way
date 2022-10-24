import React from 'react';
import Post from "./Post/Post";
import styles from './mypost.module.css'

function Myposts() {
    return (
        <div className={styles.wrapper}>
            <p>Вася ВАСЯ ВАС Я</p>
            <Post message = "Hello, NIGGA" />
            <Post  message = "YOYOYOY"/>
        </div>
    );
}

export default Myposts;