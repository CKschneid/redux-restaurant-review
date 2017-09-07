export type filter = 'byName' | 'byStars' | 'byOpenLate'

export type review = {
  user: string,
  date: string,
  rating: number,
  comment: string
}
export type restaurant = {
  name: string,
  place_id: string,
  address: Array<string>,
  hours: Array<Array<string>>,
  reviews: Array<review>
}

type star = 0 | 0.5 | 1

export type stars = [star, star, star, star, star]
