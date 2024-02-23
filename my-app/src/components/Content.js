import React, { Component } from "react";
import css from "./css/Content.module.css";
import postsData from "../posts.json";
import PostItem from "./PostItem";

const { savedPosts } = postsData;

export class Content extends Component {
    // eslint-disable-next-line
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={css.Content}>

                <div className={css.TitleBar}>
                    <h1>My Photos</h1>
                </div>

                <div className={css.SearchResults}>
                    <PostItem savedPosts={savedPosts} />
                </div>
            </div>
        );
    }
}

export default Content;