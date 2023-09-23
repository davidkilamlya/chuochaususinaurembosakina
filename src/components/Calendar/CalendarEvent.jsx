import React, { useState } from "react";

import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

function CalendarEvent() {
  const localizer = momentLocalizer(moment);

  const events = [
    {
      title: "Event 1",
      start: new Date(2023, 5, 21),
      end: new Date(2023, 5, 22),
    },
    {
      title: "Event 2",
      start: new Date(2023, 5, 24),
      end: new Date(2023, 6, 24),
    },
  ];

  
  return (
    <div className="Calender-picker">
      <div>
        <h1>Calendar with Events</h1>
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
        />
      </div>
    </div>
  );
}

export default CalendarEvent;
