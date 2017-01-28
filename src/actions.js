import axios from 'axios'

export function addReview(comment, date, rating, user, placeID){
  return {
    type: 'ADD_REVIEW',
    comment,
    date,
    rating,
    user,
    placeID
  }
}

const requestRestaurants = () => {
    return {
      type: 'REQUEST_RESTAURANTS'
    }
}
const receiveRestaurants = (fetchedData) => {
  return {
    type: 'RECEIVE_RESTAURANTS',
    fetchedRestaurants: fetchedData
  }
}

export function fetchRestaurants(){
  return (dispatch) => {
    dispatch(requestRestaurants())
    return axios.get('./restaurants.json')
                  .then( res => {
                    dispatch(receiveRestaurants(res.data.restaurants))
                  })
  }
}
