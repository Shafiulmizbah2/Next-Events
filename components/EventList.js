import React from 'react'
import EventItem from './EventItem';

import classes from "./eventList.module.css"

const EventList = ({ item }) => {
    return (
        <ul className={classes.list}>
            {
                item.map(event => {

                    return <EventItem
                     key={event.id}
                     id={event.id}
                     title={event.title}
                     location={event.location} 
                     date={event.date} 
                     image={event.image}
                    />
                })
            }
        </ul>
    )
}

export default EventList;
