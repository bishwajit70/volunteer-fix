import React from 'react';

const EventDetails = (props) => {
    
    const {_id, image, title} = props.event
    const handleDeleteEvent = props.handleDeleteEvent;

    return (
        <div>
            <img className='w-full' src={image} alt="" />
            <h1>{title}</h1>
            <button onClick={() => handleDeleteEvent(_id)}>Delete</button>
        </div>
    );
};

export default EventDetails;