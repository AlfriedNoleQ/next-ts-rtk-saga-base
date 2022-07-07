import axios from 'axios'
import { apiBaseUrl } from '../constants'

// import { removeServerCookieRequuest } from 'api/auth';

const authRequest = axios.create({
  baseURL: apiBaseUrl
})
const SSRRequest = axios.create({
  timeout: 2000,
  baseURL: apiBaseUrl
})

// Add a request interceptor
// authRequest.interceptors.request.use(async request => {
//   const auth = LocalStorage.get(PROJECT_AUTH_TOKEN)

//   if (auth) {
//     request.headers.Authorization = `Bearer ${auth?.token}`
//   }
//   return request
// })

authRequest.interceptors.response.use(
  (response: any) => {
    return response.data.data
  },
  async (error: any) => {
    const originalRequest = error.config
    if (error?.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true
      // LocalStorage.remove(PROJECT_AUTH_TOKEN);
      // const auth = getAuth();
      // if (auth.currentUser) {
      //   const token = await getIdToken(auth.currentUser, true);
      //   originalRequest.headers.Authorization = `Bearer ${token}`;
      //   return authRequest(originalRequest);
      // }
      // LocalStorage.remove(PROJECT_AUTH_TOKEN)

      if (typeof window !== 'undefined') {
        window.open('/auth/login', '_self')
      }
    } else {
      // Retried faile => Log user out
      // await signOut(getAuth());
      // await removeServerCookieRequuest();
    }
    return Promise.reject(error?.response?.data)
  }
)

export { authRequest, SSRRequest }
