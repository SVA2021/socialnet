import React from "react";
import AboutMe from "./AboutMe/AboutMe";
import AboutMeContainer from "./AboutMe/AboutMeContainer";
import main from "./News.module.css";
import PostsContainer from "./Posts/PostsContainer";

const News = (props) => {
    return (
        <div className={main}>
            <AboutMeContainer />
            <PostsContainer />
        </div>
    );
}

export default News;