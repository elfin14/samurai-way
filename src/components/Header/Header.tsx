import React from 'react';
import skull from "./skull.svg";
import styles from'./header.module.css';

function Header() {
    return (
        <div className={styles.header__wrapper}>
            <div className={styles.header__wrapper_img}>
                <img src='https://garsidej.files.wordpress.com/2016/05/coursework-1.jpg?w=768' alt='avatar' className={styles.header__wrapper_background}/>
                <div className={styles.header}>
                    <div className={styles.header__logo}>
                        <img src={skull} className={styles.img} alt='avatar'></img>
                        <p className={styles.header__text}>Pirat</p>
                    </div>
                    <div className={styles.header__entry}>
                        <button className={styles.header__button}>Log In</button>
                        <button className={styles.header__button}>Sign Up</button>
                    </div>
                </div>
            </div>
            <div className={styles.string}></div>

        </div>
    );
}

export default Header;