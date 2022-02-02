const items = require('../assets/data')

const handler = async (async, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify(items),
  }
}

module.exports = { handler }
