import React from 'react';

const Image = ({data}) => {
    return (
        <div className='container'>
            <img  src={data.artwork_url} alt='poster' width={200}/>
        </div>
    );
};

export default Image;
