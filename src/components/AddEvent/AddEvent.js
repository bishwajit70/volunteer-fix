import React from 'react';

const AddEvent = () => {

    const handleAddEvent = event => {
        event.preventDefault();
        const title = event.target.eventTitle.value;
        const description = event.target.description.value;
        const image = event.target.imageLink.value;

        const eventName = { title, description, image }
        console.log(eventName);

        // send event to the server
        fetch('http://localhost:5000/event', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(eventName)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                alert("Event Added Successfully.");
                event.target.reset();
            })

    }

    return (
        <div>
            <h2 className='text-3xl uppercase mb-5'>Add Event</h2>
            <form onSubmit={handleAddEvent} className='grid w-2/5 mx-auto'>
                <input className='border rounded mb-5 p-2' type="text" name="eventTitle" id="eventTitle" required placeholder='Event Title' />
                <input className='border rounded mb-5 p-2' type="text" name="description" id="description" required placeholder='Desctiption' />
                <input className='border rounded mb-5 p-2' type="text" name="imageLink" id="imageLink" required placeholder='Image Link' />
                <input className='border rounded text-2xl text-white uppercase bg-blue-600 p-2 cursor-pointer' type="submit" value="Submit" />
            </form>

        </div>
    );
};

export default AddEvent; <h2>Add Event</h2>
