import React from "react";
import main from "./News.module.css";
import PostsContainer from "./Posts/PostsContainer";

const News = (props) => {
    return (
        <div className={main}>
            <PostsContainer store={props.store} />
        </div>
    );
}

export default News;