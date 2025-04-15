import React from 'react';
import { Link, useNavigate } from 'react-router';
const SinglePost = ({post}) => {
    const{id,title}=post
    const navigate=useNavigate()
    const handleNavigate=()=>{
navigate('moreDetail')
    }
    return (
        <div style={{border:'2px solid red', margin:'15px',padding:'10px'}}> 
            <h3>{title}</h3>
            <Link to={`/posts/${id}`}>
            <button>Show details</button> </Link>
            <button onClick={handleNavigate}>Details of :{id}</button>
        </div>
    );
};

export default SinglePost;