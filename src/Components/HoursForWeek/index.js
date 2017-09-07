// @flow
import React from 'react'
import HoursForOneDay from '../HoursForDay'

const HoursForWeek = ({ hours }: { hours: Array<Array<string>> }) => (
  <div>
    {hours.map((dayHours, index) => (
      <HoursForOneDay key={index} day={index} hours={dayHours} />
    ))}
  </div>
)
export default HoursForWeek
