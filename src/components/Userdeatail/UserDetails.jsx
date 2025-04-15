import React from 'react';
import { useLoaderData } from 'react-router';

const UserDetails = () => {
    const user=useLoaderData();
    // console.log(userD);
const {website,name,username,address,email,phone}=user;

const userStyle={

    border:'2px solid yellowgreen',
    borderRadius:'20px',
    padding:'10px',
    margin:'10px'
}

    return (
        <div>
            <h3>User Details</h3>
           <div style={userStyle}>
           <h4>Name: {name} - ({username})</h4>
           <p>Web: {website}</p>
           <p>Email: {email}</p>
           <p>Phone: {phone}</p>
           <h5>Address: {address.city},{address.street}</h5>
           </div>
        </div>
    );
};

export default UserDetails;