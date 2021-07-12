import React from 'react';
import PostsSection from './PostsSection';

import './Posts.css';

const Posts = () => {

    const postsData = [
        {
            subtitle: 'Making a design system from scratch',
            date: '12 Feb 2020',
            text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
        },
        {
            subtitle: 'Creating pixel perfect icons in Figma',
            date: '17 Mar 2020',
            text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
        }
    ]

    return (
        <div className="posts">
            <h3 className="postsTitle">Recent posts</h3>
            <div className="postsContainer">
            {(postsData || []).map((post, index) => {
                console.log(post, index)
                return <PostsSection details={post} />

            })}
        </div>
        </div>
    )
}

export default Posts