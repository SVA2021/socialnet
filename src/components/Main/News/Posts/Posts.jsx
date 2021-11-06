import React from "react";
import main from "./Posts.module.css";
import { addPostActionCreator, updateNewPostActionCreator } from "../../../../redux/state";

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
  // debugger;
    let postDiv = props.postlist.map( p => <Post post={p.post} id={p.id}/>);

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        let action = addPostActionCreator(text); //{type: 'ADD-POST', newPostText: text};
        //debugger;
        props.dispatch(action);
       //props.updateNewPostText('');
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = updateNewPostActionCreator(text);
        props.dispatch(action);
    }

    return (
        <div className={main}>
            <h3>My posts page</h3>
            <div>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
            </div>
            <div>
                <button onClick={addPost}>add post</button>
            </div>
            {postDiv}
      </div>
    );
}

export default Posts;
