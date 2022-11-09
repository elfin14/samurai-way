import React from 'react';
import Post from './Post/Post';
import styles from './mypost.module.css'
import {PostsType} from '../../../redux/state';


type MypostsPropsType = {
    posts: Array<PostsType>
    addNewPost: (text: string) => void
}

function Myposts(props: MypostsPropsType) {

    let postElements = props.posts.map(el => <Post message={el.message} likescount={el.likescount}/>)
    let newPostElement = React.createRef<HTMLTextAreaElement>()
    const addPost = () => {
        if(newPostElement.current){
            props.addNewPost(newPostElement.current.value)
        }

    }
    return (
        <div className={styles.wrapper}>
            <p>My posts</p>
            <textarea ref={newPostElement}></textarea>
            <button onClick={addPost}>Add Post</button>
            {postElements}
        </div>
    );
}

export default Myposts;