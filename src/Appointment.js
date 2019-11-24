import React, { useState } from 'react';

const appointmentTimeOfDay = startsAt => {
  const [h, m] = new Date(startsAt).toTimeString().split(":");

  return `${h}:${m}`
}

export const Appointment = ({customer}) => {
  return (
    <>
      {customer.firstName}
    </>
  )
}

export const AppointmentsDayView = ({appointments}) => {
  const [
    selectedAppointment,
    setSelectedAppointment
  ] = useState(0);
  
  return (
    <div id="appointmentsDayView">
      <ol>
        {
          appointments.map( (i, ind) => (
            <li key={i.startsAt}>
              <button onClick={() => setSelectedAppointment(ind)} type="button" >
                {appointmentTimeOfDay(i.startsAt)}
              </button>
            </li>
          ) )
        }
      </ol>
      {
        appointments.length === 0 ? 
        <p>
          There are no appointments sheduled for today.
        </p> :
        <Appointment customer={appointments[selectedAppointment].customer} />
      }
    </div>
  )
}

