const button = document.querySelector('.newJoke')
const jokeElement = document.querySelector('p')

async function getJoke() {
  const data = await fetch('https://icanhazdadjoke.com', {
    headers: {
      accept: 'application/json'
    }
  })
  const response = await data.json()
  // console.log(response)
  jokeElement.innerText = response.joke
}

button.addEventListener('click', getJoke)