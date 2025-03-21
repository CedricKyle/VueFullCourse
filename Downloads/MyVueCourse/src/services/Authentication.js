import Api from '@/services/Api.js'

export default {
  register(credentials){
    return Api().post('register', credentials)
  }
}

// AuthenticatorAssertionResponse.register({
//   username: 'john.doe',
//   password: 'password123'
// })