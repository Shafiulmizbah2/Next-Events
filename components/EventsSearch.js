import React from 'react'
import {useState} from "react"
import {useRouter} from 'next/router'
import Button from './ui/Button'

import classes from "./eventSearch.module.css";

const EventsSearch = (props) => {
    const router = useRouter();
    const [event,setEvent] = useState({ year:"2021",month:"1"})

    const handleChange = (e)=>{
        const name = e.target.name;
        const value = e.target.value;

        setEvent({...event,[name] : value});
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        // console.log(event.year,event.month)
        if(event){
            router.push(`/events/${event.year}/${event.month}`);
        }
    }
    return (
        <form className={classes.form} onSubmit={handleSubmit}>
            <div className={classes.controls}>
                <div className={classes.control}>
                    <label htmlFor="year">Year</label>
                    <select id="year" name="year" onChange={(e)=>handleChange(e)}>
                        <option value="2021">2021</option>
                        <option value="2022">2022</option>
                    </select>
                </div>
                <div className={classes.control}>
                    <label htmlFor="month">Month</label>
                    <select id="month" name="month" onChange={(e)=>handleChange(e)} >
                        <option value="1">January</option>
                        <option value="2">February</option>
                        <option value="3">March</option>
                        <option value="4">April</option>
                        <option value="5">May</option>
                        <option value="6">June</option>
                        <option value="7">July</option>
                        <option value="8">August</option>
                        <option value="9">September</option>
                        <option value="10">October</option>
                        <option value="11">November</option>
                        <option value="12">December</option>
                    </select>
                </div>
            </div>
            <Button>Find Events</Button>
        </form>
    )
}

export default EventsSearch;
