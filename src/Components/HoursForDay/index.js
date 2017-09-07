// @flow
import React from 'react'
import { mapProps } from 'recompose'
import { getDayFromIndex } from '../../utilities'
import chunk from 'lodash/chunk'

let HoursForDay = ({
  day,
  hours
}: {
  day: string,
  hours: Array<Array<string>>
}) => (
  <div>
    <h3>{day}:</h3>
    {hours.map((shift, index) => (
      <div>
        {shift[0]} to {shift[1]}
      </div>
    ))}
  </div>
)

HoursForDay = mapProps(
  ({ day, hours }: { day: number, hours: Array<string> }) => ({
    day: getDayFromIndex(day),
    shifts: chunk(hours, 2)
  })
)(HoursForDay)

export default HoursForDay
