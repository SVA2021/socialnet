import React from "react";
import main from "./News.module.css";
import Posts from "./Posts/Posts";

const News = (props) => {
    return (
        <div className={main}>
            <Posts postlist={props.postlist} addPost={props.addPost} 
                updateNewPostText={props.updateNewPostText} newPostText={props.newPostText}/>
        </div>
    );
}

export default News;