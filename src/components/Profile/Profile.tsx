import React from 'react';
import styles from './profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import Myposts from './Myposts/Myposts';
import {PostsType} from '../../redux/state';


type ProfilePropsType = {
    posts: Array<PostsType>
    addNewPost:(text:string)=>void
}

function Profile(props: ProfilePropsType) {
    return (<>
            <div className={styles.wrapper__content}>
                <ProfileInfo/>
                <div className={styles.myposts}>
                    <Myposts posts={props.posts} addNewPost={props.addNewPost}/>
                </div>
            </div>
        </>
    );
}

export default Profile;