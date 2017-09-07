// @flow
import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import styled from 'styled-components'
import { filterMap } from '../../utilities'
import { filter } from '../../types'

const ButtonText = styled.span`
  color: ${({ isActive }) => (isActive ? 'green' : 'black')};
`
const FilterButton = ({
  filter,
  isActive
}: {
  filter: filter,
  isActive: boolean
}) =>
  <Link to={`/${filter}`}>
    <ButtonText>
      {filterMap[filter]}
    </ButtonText>
  </Link>

export default FilterButton
