import React from 'react'
import { useRouter } from 'next/router'

import { getFilteredEvents } from '../../events-data'
import EventList from '../../components/EventList'

const FilteredEventsPage = () => {
    const router = useRouter();
    const filterd = router.query.slug;
    
    if(!filterd || filterd.length == 0){
        return <h1>NO ITEM FOUND!</h1>
    }

    const filterdYear = +filterd[0];
    const filterdMonth = +filterd[1];
    
    const filteredEvents = getFilteredEvents({year:filterdYear,month:filterdMonth});
    console.log(filteredEvents);

    if(!filteredEvents || filteredEvents.length <=0 || isNaN(filterdYear) || isNaN(filterdMonth)){
        return <h1 className="center">NO ITEM FOUND!</h1>
    }

    return (
        <>
            <EventList item={filteredEvents} />
        </>
    )
};

export default FilteredEventsPage;
