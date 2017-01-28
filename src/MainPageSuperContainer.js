import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {Link, withRouter} from 'react-router'
import {fetchRestaurants} from './actions'
import calculateStars from './calculateStars'
import sortRestaurants from './sortRestaurants'
//import MainPage from './MainPage'


class MainPageContainer extends Component{
  constructor(props){
      super(props);
      const { dispatch } = this.props
      dispatch(fetchRestaurants())
}

  render(){
    const {restaurants, currentFilter} = this.props
    return (
      <section>
        <div>
          <h3> Filter Restaurants By: </h3>
          <Link to="/byName">
            <button>Name</button>
          </Link>
          <Link to="/byStars">
            <button>Stars</button>
          </Link>
          <Link to="/byOpenLate">
            <button>Open Late</button>
          </Link>
        </div>
        <div>
          {restaurants.map( restaurant => {
            return (
              <Link to={`/spotlight/${restaurant.place_id}`}
                    key={restaurant.place_id}
              >
                <div>
                  <h4>
                    {restaurant.name}
                  </h4>
                </div>
              </Link>
            )
          })
        }
        </div>
      </section>
    )
  }
}

const mapStateToMainPageContainerProps = (state, { params }) => ({
  restaurants: sortRestaurants(state.restaurants, params.filter),
  currentFilter: params.filter || 'byName'
})

const MainPageSuperContainer = withRouter(connect(mapStateToMainPageContainerProps)(MainPageContainer))

export default MainPageSuperContainer;




/*
MainPageContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  restaurants: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    place_id: PropTypes.string,
    address: PropTypes.arrayOf(PropTypes.string),
    photo: PropTypes.string,
    hours: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
    reviews: PropTypes.arrayOf(PropTypes.shape({
      user: PropTypes.string,
      date: PropTypes.string,
      rating: PropTypes.num,
      comment: PropTypes.string
    }))
  }))
}
<MainPage
    sortMethod={this.state.sortMethod}
    updateSortMethod={this.updateSortMethod}
    sortByName={this.sortByName}
    sortByStars={this.sortByStars}
    filterForLate={this.filterForLate}
    restaurants={this.props.restaurants}
/>
*/
