// @flow
import React from 'react'
import { Link } from 'react-router-dom'

const RestaurantListItem = ({
  name,
  placeID
}: {
  name: string,
  placeID: string
}) =>
  <Link to={`featured/${placeID}`}>
    {name}
  </Link>

export default RestaurantListItem
