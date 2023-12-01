import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import { Paper } from "@mui/material";
import { formatDate } from "@fullcalendar/core";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import "./calendar.css";
import Swal from 'sweetalert2'

function renderEventContent(eventInfo) {
    return (
        <>
            <b>{eventInfo.timeText}</b>
            <i>{eventInfo.event.title}</i>
        </>
    );
}

function renderSidebarEvent(event) {
    return (
        <li key={event.id}>
            <b>
                {formatDate(event.start, {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                })}
            </b>
            <i>{event.title}</i>
        </li>
    );
}

const Calendar = () => {
    const [weekendsVisible, setweekendsVisible] = useState(true);
    const [currentEvents, setcurrentEvents] = useState([]);
    const handleWeekendsToggle = () => {
        setweekendsVisible(!weekendsVisible);
    };
    let eventGuid = 0;
    function createEventId() {
        return String(eventGuid++);
    }
    const handleDateSelect = (selectInfo) => {
        // let title = prompt("Please enter a new title for your event");
        let calendarApi = selectInfo.view.calendar;
        calendarApi.unselect(); // clear date selection
        const { value: text } = Swal.fire({
            title:"Please enter a new title for your event",
            input: "text",
            showCancelButton: true
        }).then((res)=>{
            if (res.value) {
                calendarApi.addEvent({
                    id: createEventId(),
                    title:res.value,
                    start: selectInfo.startStr,
                    end: selectInfo.endStr,
                    allDay: selectInfo.allDay,
                });
            }
        });
    };
    const handleEventClick = (clickInfo) => {
        Swal.fire({
            title: `Are you sure you want to delete the event ${clickInfo.event.title}?`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                clickInfo.event.remove();
                Swal.fire({
                    title: "Deleted!",
                    icon: "success"
                });
            }
        });
    };
    const handleEvents = (events) => {
        setcurrentEvents(events);
    };
    return (
        <div className="py-5 px-6 flex flex-col lg:flex-row gap-8 lg:gap-4">
            <Paper className="demo-app-sidebar p-3 w-full sm:w-[300px]">
                <h2 className="text-center font-bold text-2xl mb-2">All Events ({currentEvents.length})</h2>
                <ul>{currentEvents.map(renderSidebarEvent)}</ul>
            </Paper>
            <div className="demo-app-main overflow-auto lg:ps-12">
                <FullCalendar className="w-[430px] sm:w-full"
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                headerToolbar={{
                    left: "prev,next today",
                    center: "title",
                    right: "dayGridMonth,timeGridWeek,timeGridDay",
                }}
                initialView="dayGridMonth"
                editable={true}
                selectable={true}
                selectMirror={true}
                dayMaxEvents={true}
                weekends={weekendsVisible}
                // initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
                select={handleDateSelect}
                eventContent={renderEventContent} // custom render function
                eventClick={handleEventClick}
                eventsSet={handleEvents} // called after events are initialized/added/changed/removed
                /* you can update a remote database when these fire:
                    eventAdd={function(){}}
                    eventChange={function(){}}
                    eventRemove={function(){}}
                    */
                />
            </div>
        </div>
    );
};

export default Calendar;