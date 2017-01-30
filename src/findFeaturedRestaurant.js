import find from 'lodash/find'

const findFeaturedRestaurant = (restaurants, placeID) => {
  return restaurants.find( restaurant => {
    return restaurant.place_id == placeID
  })
}

export default findFeaturedRestaurant
