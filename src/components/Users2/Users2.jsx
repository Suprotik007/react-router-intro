import React,{use} from 'react';

const Users2 = ({usersPromise}) => {
    const users=use(usersPromise)
    console.log("data load",users);
    
    return (
        <div>
            <p>user----2</p>
        </div>
    );
};

export default Users2;