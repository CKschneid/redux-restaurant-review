//@flow
import { restaurant } from '../../types'

export const filterMap = {
  byName: 'name',
  byStars: 'stars',
  byOpenLate: 'open late'
}

const calculateStars = (restaurant: restaurant) : number => {
  let sum = restaurant.reviews.map( review => review.rating )
                              .reduce ( (previous, current) => previous + current)
  return sum / restaurant.reviews.length
}
export calculateStars

const getDayFromIndex = (index : number):string => {
  switch (index) {
    case 0:
      return 'Sunday'
    case 1:
      return 'Monday'
    case 2:
      return 'Tuesday'
    case 3:
      return 'Wednesday'
    case 4:
      return 'Thursday'
    case 5:
      return 'Friday'
    case 6:
      return 'Saturday'
  }
}

export getDayFromIndex
