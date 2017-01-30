import find from 'lodash/find'

const findFeaturedRestaurant = (restaurants, placeID) => {
  return find( restaurants, restaurant => {
    return restaurant.place_id === placeID
  })
}

export default findFeaturedRestaurant
