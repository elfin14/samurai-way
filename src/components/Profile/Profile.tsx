import React from 'react';
import styles from './profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MypostsContainer from './Myposts/MypostsContainer';




function Profile() {
    return (<>
            <div className={styles.wrapper__content}>
                <ProfileInfo/>
                <div className={styles.myposts}>
                    <MypostsContainer />
                </div>
            </div>
        </>
    );
}

export default Profile;