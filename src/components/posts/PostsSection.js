import React from 'react';

import './Posts.css'

const PostsSection = (props) => {
    return (
        <div className="postsSection">
            <h2 className="postsSubitle">{props.details.subtitle}</h2>
            <h3 className="postsDate">{props.details.date}</h3>
            <p>{props.details.text}</p>
        </div>

    )
}

export default PostsSection