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
class Posts extends React.Component {

    newPostElement = React.createRef();

    addPost = () => {
        this.props.addPost(this.newPostElement.current.value);
    }

    onPostChange = () => {
        this.props.onPostChange(this.newPostElement.current.value);
    }

    render = () => {
        return (
            <div className={main}>
                <h3>My posts page</h3>
                <div>
                    <textarea onChange={this.onPostChange} ref={this.newPostElement} value={this.props.postPage.newPostText} />
                </div>
                <div>
                    <button onClick={this.addPost}>add post</button>
                </div>
               { this.props.postPage.postlist.map(p => <Post post={p.post} id={p.id} />) }
            </div>
        );
    }
}

export default Posts;