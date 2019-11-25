import React, { useState } from 'react';

const appointmentTimeOfDay = startsAt => {
  const [h, m] = new Date(startsAt).toTimeString().split(":");

  return `${h}:${m}`
}

export const Appointment = ({customer}) => {
  return (
    <table>
      <tbody>
        <tr>
          <td className="appointment--title">Customer: </td>
          <td>{`${customer.firstName || ""} ${customer.lastName || ""}`}</td>
        </tr>
        <tr>
          <td className="appointment--title">Phone number: </td>
          <td>{customer.phoneNumber}</td>
        </tr>
        <tr>
          <td className="appointment--title">Stylist: </td>
          <td>{customer.stylist}</td>
        </tr>
        <tr>
          <td className="appointment--title">Service: </td>
          <td>{customer.service}</td>
        </tr>
        <tr>
          <td className="appointment--title">Notes: </td>
          <td>{customer.notes}</td>
        </tr>
      </tbody>
    </table>
  )
}

export const AppointmentsDayView = ({appointments}) => {
  const [
    selectedAppointment,
    setSelectedAppointment
  ] = useState(0);
  
  return (
    <div id="appointmentsDayView">
      <table>
        <thead>
          <tr>
            <th />
            <th>
              {
                appointments.length === 0 ?
                  <p>There are no appointments sheduled for today.</p> :
                  <p>Today's appointment at {appointmentTimeOfDay(appointments[selectedAppointment].startsAt)}</p>
              }
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
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
            </td>
            <td>
              {
                !!appointments.length &&
                  <Appointment customer={appointments[selectedAppointment].customer} />
              }
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

