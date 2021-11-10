import React from "react";
import main from "./Posts.module.css";

const Post = (props) => {
    return (
        <div className={main.postWrapper}>
            <span>{props.id}</span>
            <img className={main.ava} src="https://freesvg.org/img/1635463223army-soldier-vector.png" alt="ava" />
            <p>{props.post}
            </p>
        </div>
    );
}

const Posts = (props) => {

    let postDiv = props.postPage.postlist.map(p => <Post post={p.post} id={p.id} />);

    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost(newPostElement.current.value);
    }

    let onPostChange = () => {
        props.onPostChange(newPostElement.current.value);
    }

    return (
        <div className={main}>
            <h3>My posts page</h3>
            <div>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.postPage.newPostText} />
            </div>
            <div>
                <button onClick={addPost}>add post</button>
            </div>
            {postDiv}
        </div>
    );
}

export default Posts;