import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';



const PostDetail = () => {
    const postDetail=useLoaderData()
    const navigate=useNavigate()
    return (
        <div style={{border:'2px dotted green ',paddingTop:'40px', margin:'50px'}}>
            <h3>{postDetail.title}</h3>
            <p>{postDetail.body}</p>
            <button onClick={()=>navigate(-1)}> Go back</button>
        </div>
        
    );
};

export default PostDetail; 