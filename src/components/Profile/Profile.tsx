import React from 'react';
import styles from './profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import Myposts from './Myposts/Myposts';
import {ActionTypes, PostsType} from '../../redux/state';


type ProfilePropsType = {
    posts: Array<PostsType>
    newPostText:string
    dispatch:(action:ActionTypes)=>void
}

function Profile(props: ProfilePropsType) {
    return (<>
            <div className={styles.wrapper__content}>
                <ProfileInfo/>
                <div className={styles.myposts}>
                    <Myposts posts={props.posts} dispatch={props.dispatch}  newPostText={props.newPostText}/>
                </div>
            </div>
        </>
    );
}

export default Profile;