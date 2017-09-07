// @flow
import React from 'react'
import styled from 'styled-components'
import { compose } from 'recompose'
import { review } from '../../types'
import Address from '../Address'
import Stars from '../Stars'

// TODO: <Stars stars={stars}/>
//       <HoursInfo hours={Array<Array<string>>}/>

const RestaurantInfo = styled.div``
const ComposeReview = styled.div``
const Reviews = styled.div``

let FeaturedRestaurant = ({
  name,
  address,
  stars,
  placeID
}: {
  name: string,
  address: Array<string>,
  stars: number,
  placeID: string
}) =>
  <div>
    <RestaurantInfo>
      <h1>
        {name}
      </h1>
      <Address address={address} />
      <img src={`images/${placeID}`} />
      <Stars stars={stars} />
    </RestaurantInfo>
    <Reviews />
    <ComposeReview />
  </div>

export default FeaturedRestaurant
