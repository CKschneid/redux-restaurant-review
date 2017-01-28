import calculateStars from './calculateStars'

const sortByName = (restaurants)=>{
   return restaurants.sort( (a,b) => a.name.toUpperCase() > b.name.toUpperCase() ? 1 : -1)
}

const sortByStars = (restaurants)=>{
   return restaurants.sort( (a,b) => calculateStars(a) > calculateStars(b) ? 1 : -1 )
}

const filterForLate = (restaurants)=>{
   return restaurants.filter( restaurant => {
       let isOpenLate = false; // after 11 pm
       restaurant.hours.forEach( day => {
         if( parseInt(day[day.length - 1]) >= 11) {
           isOpenLate = true;
         }
       });
       return isOpenLate
   });
}
const sortRestaurants = (restaurants, filter) => {
  switch (filter) {
    case 'byName':
      return sortByName(restaurants)

    case 'byStars':
      return sortByStars(restaurants)

    case 'byOpenLate':
      return filterForLate(restaurants)

    default:
      return sortByName(restaurants)

  }
}

export default sortRestaurants
