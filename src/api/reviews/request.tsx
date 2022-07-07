import { authRequest } from '../axios'

export const getReviews = async (query: String) => {
  return authRequest({
    url: '/reviews',
    method: 'GET',
    params: query
  })
}
