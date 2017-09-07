// @flow
import React from 'react'
import FilterButton from '../FilterButton'
import { filter } from '../../types'

const FilterSelection = ({ currentFilter }: { currentFilter: filter }) =>
  <div>
    {['byName', 'byStars', 'byOpenLate'].map(
      filter =>
        currentFilter == filter
          ? <FilterButton filter={filter} isActive={true} />
          : <FilterButton filter={filter} isActive={false} />
    )}
  </div>

export default FilterSelection
