const getRandomInt = max => Math.floor(Math.random() * Math.floor(max))

const destabilize = () => {
  if (getRandomInt(50) === 7) {
    throw new Error('Have you tried turning it off and on again?')
  }

  return new Promise(resolve => setTimeout(resolve, getRandomInt(3000)))
}

export default destabilize
