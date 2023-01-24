import React, {ChangeEvent} from 'react';
import Post from './Post/Post';
import styles from './mypost.module.css'
import {MypostsPropsType} from "./MypostsContainer";



function Myposts(props: MypostsPropsType) {

    let postElements = props.posts.map((el, id) => <Post key={id} message={el.message} likescount={el.likescount}/>)

    const onAddPost = () => {props.addPost(props.newPostText)}
    const onPostChangeHandler=(e:ChangeEvent<HTMLTextAreaElement>)=>{
        let newPost=e.currentTarget.value
        props.onPostChange(newPost)
    }

    return (
        <div className={styles.wrapper}>
            <p>My posts</p>
            <textarea value={props.newPostText} onChange={onPostChangeHandler}></textarea>
            <button onClick={onAddPost}>Add Post</button>
            {postElements}
        </div>
    );
}

export default Myposts;