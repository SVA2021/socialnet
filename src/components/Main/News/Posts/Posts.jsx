import React from "react";
import main from "./Posts.module.css";
import { Field, reduxForm } from 'redux-form';

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


const PostForm = (props) => {
    // const { handleSubmit, pristine, reset, submitting } = props;
    // debugger
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    name="post"
                    component="textarea"
                    placeholder="start type here"
                />
            </div>
            <div>
                <button type="submit" >
                    Add Post
                </button>
            </div>
        </form>
    )
}

const PostReduxForm = reduxForm({ form: 'post' })(PostForm);

class Posts extends React.Component {

    newPostElement = React.createRef();

    addPost = (values) => {
        // this.props.addPost(this.newPostElement.current.value);
        this.props.addPost(values.post);
    }

    onPostChange = () => {
        this.props.onPostChange(this.newPostElement.current.value);
    }

    render = () => {

        return (
            <div className={main}>
                <h3>My posts page</h3>
                <PostReduxForm onSubmit={this.addPost} />
                {/* <div>
                    <textarea onChange={this.onPostChange} ref={this.newPostElement} value={this.props.postPage.newPostText} />
                </div>
                <div>
                    <button onClick={this.addPost}>add post</button>
                </div> */}
                {this.props.postPage.postlist.map(p => <Post post={p.post} id={p.id} />)}
            </div>
        );
    }
}

export default Posts;