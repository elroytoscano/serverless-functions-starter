const result = document.querySelector('.result')

const QUERY_URL = '/api/1-hello'

const setResponse = async () => {
  try {
    const { data } = await axios(QUERY_URL)
    result.textContent = data
  } catch (error) {
    console.log(error.response)
  }
}

setResponse()
