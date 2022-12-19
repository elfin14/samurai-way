import React from 'react';
import {addPostAC, changeNewTextAC} from '../../../redux/profile-reducer';
import Myposts from './Myposts';
import StoreContext from '../../../StoreContext';

function MypostsContainer() {
    return (
        <StoreContext.Consumer>
            {store => {
                const state = store.getState()
                const addPost = () => {
                    store.dispatch(addPostAC(state.profilePage.newPostText))
                }
                const onPostChangeHandler = (newPost: string) => {
                    store.dispatch(changeNewTextAC(newPost))
                }
                    return (
                        <Myposts posts={state.profilePage.posts} onPostChange={onPostChangeHandler} addPost={addPost}
                                 newPostText={state.profilePage.newPostText}/>
                    )
                }
            }
        </StoreContext.Consumer>
    );
}

export default MypostsContainer;