import React from 'react';
import { useLoaderData } from 'react-router';

const PostDetail = () => {
    const postDetail=useLoaderData()
    return (
        <div style={{border:'2px dotted green ',paddingTop:'40px', margin:'50px'}}>
            <h3>{postDetail.title}</h3>
            <p>{postDetail.body}</p>
        </div>
    );
};

export default PostDetail;