const items = require('../assets/data')

const handler = async (async, context) => {
  return {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    statusCode: 200,
    body: JSON.stringify(items),
  }
}

module.exports = { handler }
