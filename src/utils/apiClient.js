import axios from 'axios'

class ApiClient {
  init (baseURL) {
    this.instance = axios.create({
      baseURL
    })
  }
}

const apiClient = new ApiClient()

export default apiClient