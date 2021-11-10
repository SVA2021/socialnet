import React from "react";
import { addPostActionCreator, updateNewPostActionCreator } from "../../../../redux/post-reducer";
import Posts from "./Posts";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
    return { postPage: state.postPage };
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => { dispatch(addPostActionCreator()) },
        onPostChange: (text) => { dispatch(updateNewPostActionCreator(text)) }
    }
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;
