import React, {ChangeEvent} from 'react';
import Post from './Post/Post';
import styles from './mypost.module.css'
import {ActionTypes, addPostAC, changeNewTextAC, PostsType} from '../../../redux/state';


type MypostsPropsType = {
    posts: Array<PostsType>
    newPostText:string,
    dispatch:(action:ActionTypes)=>void
}

function Myposts(props: MypostsPropsType) {

    let postElements = props.posts.map((el, id) => <Post key={id} message={el.message} likescount={el.likescount}/>)

    const addPost = () => {props.dispatch(addPostAC(props.newPostText))}
    const onPostChangeHandler=(e:ChangeEvent<HTMLTextAreaElement>)=>{

        let newPost=e.currentTarget.value
        props.dispatch(changeNewTextAC(newPost))

    }

    return (
        <div className={styles.wrapper}>
            <p>My posts</p>
            <textarea value={props.newPostText} onChange={onPostChangeHandler}></textarea>
            <button onClick={addPost}>Add Post</button>
            {postElements}
        </div>
    );
}

export default Myposts;