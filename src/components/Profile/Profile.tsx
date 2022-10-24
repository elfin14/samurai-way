import React from 'react';
import styles from './profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Myposts from "./Myposts/Myposts";


function Profile() {
    return (<>
        <div className={styles.wrapper__content}>
            <ProfileInfo />
            <div className={styles.myposts}>
                <Myposts />
            </div>
        </div>
    </>
    );
}
export default Profile;