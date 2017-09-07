// @flow
import React from 'react'
import styled from 'styled-components'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { compose, flattenProp, lifecycle } from 'recompose'
import FilterSelection from '../FilterSelection'
import MainList from '../MainList'
import { fetchRestaurants } from '../../my_redux/actions'
import { filter, restaurant } from '../../types'

let MainPage = ({
  filter = 'byName',
  restaurants
}: {
  filter: filter,
  restaurants: Array<restaurant>
}) =>
  <div>
    <FilterSelection currentFilter={filter} />
    <MainList currentFilter={filter} restaurants={restaurants} />
  </div>

const mainPageEnhancer = compose(
  connect(({ restaurants }) => ({ restaurants })),
  lifecycle({
    componentDidMount() {
      this.props.dispatch(fetchRestaurants())
    }
  }),
  withRouter(),
  flattenProp('params')
)

MainPage = mainPageEnhancer(MainPage)

export default MainPage
