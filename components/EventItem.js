import React from 'react'
import Image from 'react/image'
import Button from "./ui/Button"
import classes from "./eventItem.module.css";

import ArrowRight from './icons/ArrowRight'
import Location from './icons/Location'
import Time from './icons/Time'

const EventItem = ({id,title,location,date,image}) => {

    const humanReadableDate = new Date(date).toLocaleDateString('en-US',{
        day : 'numeric',
        month :'long',
        year : 'numeric'
    });

    const formatedAddress = location.replace(', ', '\n');

    return (
        <li className={classes.item}>
            <Image src={`/${image}`} alt={title} />
            <div className={classes.content}>
                <div className={classes.summary}>
                    <h2>{title}</h2>
                    <div className={classes.date}>
                        <Time />
                        <time>{humanReadableDate }</time>
                    </div>
                    <div className={classes.address}>
                        <Location />
                        <address>{formatedAddress}</address>
                    </div>
                </div>
                <div className={classes.actions}>
                    <Button link={`/events/${id}`}>
                        <span>Explore events</span>
                        <span className={classes.icon}>
                            <ArrowRight />
                        </span>
                        
                        </Button>
                </div>
            </div>
        </li>
    )
}

export default EventItem;
