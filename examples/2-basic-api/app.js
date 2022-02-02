const result = document.querySelector('.result')

const getResponse = async () => {
  try {
    const { data } = await axios('/api/2-api')
    const products = data
      .map(({ id, name, image: { url }, price }) => {
        return ` <article key=${id} class="product">
      <img
        src=${url}
        alt="utopia sofa"
      />
      <div class="info">
        <h5>${name}</h5>
        <h5 class="price">${price}</h5>
      </div>
    </article>`
      })
      .join('')
    result.innerHTML = products
  } catch (error) {
    console.log(error.response)
  }
}

getResponse()
