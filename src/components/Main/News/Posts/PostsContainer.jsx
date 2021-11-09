import React from "react";
import { addPostActionCreator, updateNewPostActionCreator } from "../../../../redux/post-reducer";
import store from "../../../../redux/redux-store";
import Posts from "./Posts";
import {connect} from "react-redux";
/*
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
*/
let mapStateToProps = (state) => {
    return {postPage: state.postPage};
}

let mapDispatchToProps = (dispatch) => {
    return {
    addPost: () => {dispatch(addPostActionCreator())},
    onPostChange: (text) => {dispatch(updateNewPostActionCreator(text))}
    }
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;
