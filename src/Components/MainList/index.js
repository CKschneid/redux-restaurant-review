// @flow
import React from 'react'
import { mapProps } from 'recompose'
import { Link } from 'react-router-dom'
import { calculateStars } from '../../utilities'
import { filter, restaurant } from '../../types'
import RestaurantListItem from '../RestaurantListItem'

let MainList = ({ restaurants }: { restaurants: Array<restaurant> }) =>
  <div>
    {restaurants.map(({ name, placeID }: { name: string, placeID: string }) =>
      <RestaurantListItem key={placeID} name={name} placeID={placeID} />
    )}
  </div>

const mainListEnhancer = mapProps(
  ({
    restaurants,
    filter
  }: {
    restaurants: Array<restaurant>,
    filter: filter
  }) => {
    let filteredRestaurants = []
    switch (filter) {
      case 'byName':
        filteredRestaurants = restaurants.sort()
      case 'byStars':
        filteredRestaurants = restaurants.sort(
          (a, b) => calculateStars(a) - calculateStars(b)
        )
      case 'byOpenLate':
        filteredRestaurants = restaurants.filter(
          ({ hours }) => hours[6][hours[6].length - 1] > '11:00'
        )
      default:
        filteredRestaurants = restaurants.sort()
    }
    return {
      restaurants: filteredRestaurants
    }
  }
)

MainList = mainListEnhancer(MainList)

export default MainList
