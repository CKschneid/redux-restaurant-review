// @flow
import React from 'react'
import { mapProps } from 'recompose'

type star = 0 | 0.5 | 1
type stars = Array<star>

const FullStar = (
  <svg
    fill="#000000"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
    <path d="M0 0h24v24H0z" fill="none" />
  </svg>
)
const HalfStar = (
  <svg
    fill="#000000"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
  >
    <defs>
      <path d="M0 0h24v24H0V0z" id="a" />
    </defs>
    <clipPath id="b">
      <use overflow="visible" xlink:href="#a" />
    </clipPath>
    <path
      clip-path="url(#b)"
      d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4V6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"
    />
  </svg>
)
const EmptyStar = (
  <svg
    fill="#000000"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z" />
    <path d="M0 0h24v24H0z" fill="none" />
  </svg>
)
const Star = ({ starType }: { starType: star }) => {
  switch (starType) {
    case 1:
      return FullStar
    case 0.5:
      return HalfStar
    case 0:
      return EmptyStar
  }
}

let Stars = ({ stars }: { stars: stars }) =>
  <div>
    {stars.map(star => <Star starType={star} />)}
  </div>

Stars = mapProps(({ stars }: { stars: number }): { stars: stars } => ({
  stars: Array.from(
    { length: 5 },
    (_effectivelyNull, index) =>
      index < Math.floor(stars)
        ? 1
        : index == Math.floor(stars) && stars % 1 ? 0.5 : 0
  )
}))(Stars)

export default Stars
