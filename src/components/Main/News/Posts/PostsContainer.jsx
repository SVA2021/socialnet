import React from "react";
import { addPostActionCreator, updateNewPostActionCreator } from "../../../../redux/post-reducer";
import store from "../../../../redux/redux-store";
import Posts from "./Posts";

const PostsContainer = (props) => {

    let state = store.getState().postPage;

    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }

    let onPostChange = (text) => {
        props.store.dispatch(updateNewPostActionCreator(text));
    }

    return (
        <Posts 
        postPage={state}
        addPost={addPost}
        onPostChange={onPostChange}
        />
    );
}

export default PostsContainer;
