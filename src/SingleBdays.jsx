import React from 'react';

const SingleBdays = ({ name, age, image, id }) => {
    return (
        <div className='d-flex justify-content-around align-items-center mt-2'>
            <div className='person-detail d-flex gap-2 align-items-center w-50'>
                <div className='image py-2 '>
                    <img className='' src={image} style={{ width: '100px', height: '100px', borderRadius: '50%', objectFit: 'cover' }} alt={name} />
                </div>
                <div className='person d-flex flex-column'>
                    <h5>{name}</h5>
                    <h6>Age: {age}</h6>
                </div>
            </div>
            <button
                type='button'
                className='bg-warning py-2 px-4 rounded-2 align-items-center'
                style={{ cursor: 'pointer' }}
                onClick={() => {
                    console.log(id);
                }}
            >
                Remove
            </button>
        </div>
    );
};

export default SingleBdays;
