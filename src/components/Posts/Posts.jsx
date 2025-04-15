import React from 'react';
import { useLoaderData } from 'react-router';
import SinglePost from './SinglePost';
const Posts = () => {
    const posts=useLoaderData()

    return (
        <div>
            <h2>Posts:{posts.length}</h2>
            <div>
            {
                posts.map(post=><SinglePost key={post.id} post={post}></SinglePost>)
            }
            </div>
        </div>
    );
};

export default Posts;