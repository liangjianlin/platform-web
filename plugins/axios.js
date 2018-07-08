import sha1 from 'js-sha1';

export default function ({ $axios, redirect }) {

  const client = 'client1'
  const clientToken = 'client1'

  $axios.onRequest(config => {
    const nonce = Math.random().toString(36).substr(2)
    const timestamp = new Date().getTime()
    const signature = sha1(encodeURI([clientToken, timestamp, nonce].sort().toString()))
    config.params = {
      'client': client,
      'signature': signature,
      'nonce': nonce,
      'timestamp': timestamp
    }
  })

  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status)
    if (code === 400) {
      redirect('/400')
    }
  })

}