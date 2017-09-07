import { combineReducers } from 'redux'

const fetchingStateReducer = (state='false', action) => {
  switch (action.type) {
    case 'REQUEST_RESTAURANTS':
      return true
    case 'RECEIVE_RESTAURANTS':
      return false
    default:
      return state
  }
}

const reviewReducer = (state=[], action) => {
  switch (action.type) {
    case 'ADD_REVIEW':
      return ([...state, {
        comment: action.comment,
        date: action.date,
        rating: action.rating,
        user: action.user
      }])
    default:
      return state
  }
}

const restaurantReducer = (state={}, action) => {
  switch (action.type) {
    case 'ADD_REVIEW':
      if (state.place_id !== action.placeID) {
        return state
      }
      return (
        {...state,
          reviews: reviewReducer(state.reviews, action)
        }
      )
    default:
      return state
  }
}

const restaurantsReducer = (state=[], action) => {
  switch (action.type) {
    case 'RECEIVE_RESTAURANTS':
      return action.fetchedRestaurants
    case 'ADD_REVIEW':
      return(
        state.map( restaurant => {
          restaurantReducer(restaurant, action)
        })
      )
    default:
      return state
  }
}

const rootReducer = combineReducers({
  fetchingState: fetchingStateReducer,
  restaurants: restaurantsReducer
})

export default rootReducer

/*
//Test Reducer
const fooReducer = (state=1, action) => {
  switch (action.type) {
    case 'FOO_ACTION':
      return state + 1
    default:
      return state
  }
}

const barReducer = (state=1, action) => {
  switch (action.type) {
    case 'BAR_ACTION':
      return state + 1
    default:
      return state
  }
}


const rootReducer = combineReducers({
  foo: fooReducer,
  bar: barReducer
})

export default rootReducer


*/
