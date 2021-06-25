
import React from 'react'
import EventList from '../../components/EventList';
import { getFeaturedEvents } from '../../events-data'

const EventsPage = () => {
  const featuredEvents = getFeaturedEvents();
  return (
    <>
        <h1 className="center">Featured Events</h1>
        <EventList item={featuredEvents} />
    </>
  )
}

export default EventsPage;

