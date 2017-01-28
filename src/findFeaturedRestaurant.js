const findFeaturedRestaurant = (restaurants, placeID) => {
  return restaurants.find( restaurant => restaurant.place_id == placeID)
}

export default findFeaturedRestaurant
