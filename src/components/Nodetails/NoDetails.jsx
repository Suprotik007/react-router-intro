import React ,{use}from 'react';
// import { useLoaderData } from 'react-router';

const NoDetails = ({detailPromise}) => {
    const noDetails=use(detailPromise)
    console.log(noDetails);
    

    return (
        <div style={{border:'2px dotted green ',paddingTop:'40px', margin:'50px'}}>
            <h4>More Details:</h4>
            <div>
                <h3>Oppsss!Unfortunately no detail found</h3>
            </div>
        </div>
    );
};

export default NoDetails;