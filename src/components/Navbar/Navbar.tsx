import React from 'react';
import styles from './navbar.module.css';
import {NavLink} from 'react-router-dom';

function Navbar() {
    return (
        <div className={styles.nav}>
            <ul className={styles.nav__list}>
                <li className={styles.nav__list_item}>
                    <NavLink to='/profile'  activeClassName={styles.activeLink}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Profile
                    </NavLink>
                </li>
                <li className={styles.nav__list_item}>
                    <NavLink to='/news' activeClassName={styles.activeLink} >
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        News
                    </NavLink>
                </li>
                <li className={styles.nav__list_item}>
                    <NavLink to='/dialogs' activeClassName={styles.activeLink} >
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Message
                    </NavLink>
                </li>
                <li className={styles.nav__list_item}>
                    <NavLink to='/comrades' activeClassName={styles.activeLink} >
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Comrades
                    </NavLink>
                </li>
                <li className={styles.nav__list_item}>
                    <NavLink to='/music' activeClassName={styles.activeLink} >
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Music
                    </NavLink>
                </li>
                <li className={styles.nav__list_item}>
                    <NavLink to='/users' activeClassName={styles.activeLink} >
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Users
                    </NavLink>
                </li>
                <li className={styles.nav__list_item}>
                    <NavLink to='/setting' activeClassName={styles.activeLink} >
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Setting
                    </NavLink>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;