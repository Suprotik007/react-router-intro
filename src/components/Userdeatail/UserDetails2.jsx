import React,{use} from 'react';

const UserDetails2 = ({userPromise}) => {
    const {name,username}=use(userPromise)
    return (
        <div>
            <h5>{name}</h5>
            <h2>{username}</h2>
        </div>
    );
};

export default UserDetails2;