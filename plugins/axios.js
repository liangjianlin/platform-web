import sha1 from 'js-sha1'

export default function ({ $axios, redirect }) {

  const client = 'client'
  const clientToken = 'clientToken'

  $axios.onRequest(config => {
    const nonce = Math.random().toString(36).substr(2)
    const timestamp = new Date().getTime()
    const signature = sha1([clientToken, timestamp, nonce].sort().toString())
    config.data.client = client
    config.data.signature = signature
    config.data.nonce = nonce
    config.data.timestamp = timestamp
  })

  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status)
    if (code === 400) {
      redirect('/400')
    }
  })

}