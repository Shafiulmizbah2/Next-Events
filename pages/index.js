
import React from 'react'

import EventList from  "../components/EventList"
import EventsSearch from '../components/EventsSearch'
import { getAllEvents } from "../events-data"


const HomePage = () => {
    const events = getAllEvents();
    return (
        <>
            <EventsSearch />
            <EventList item={events} />
        </>
    )
}

export default HomePage;

