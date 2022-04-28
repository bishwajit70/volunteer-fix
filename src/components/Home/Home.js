import React, { useEffect, useState } from 'react';
import EventDetails from '../EventDetails/EventDetails';

const Home = () => {


    const [events, setEvents] = useState([])
    useEffect(() => {
        const url = 'http://localhost:5000/event'
        fetch(url)
            .then(res => res.json())
            .then(data => setEvents(data))
    }, [])

    // Delete an event 
    const handleDeleteEvent = (id) => {
        console.log(id);
        const proceed = window.confirm('Are you sure to delete the Event?');
        if (proceed) {
            // console.log('deleting Event with,', id)
            const url = `http://localhost:5000/event/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remainingEvent = events.filter(event => event._id !== id)
                        setEvents(remainingEvent);
                    }

                });
        }

    }

    console.log(handleDeleteEvent)

    return (
        <div className='grid grid-cols-3 pt-10 gap-5'>
            {
                events.map(event => <EventDetails
                    key={event._id}
                    event={event}
                    handleDeleteEvent={handleDeleteEvent}
                ></EventDetails>)
            }

        </div>
    );
};

export default Home;