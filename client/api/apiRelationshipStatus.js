import request from 'superagent'

const relStatus = 'https://api.datamuse.com/words?ml=divorced&topics=relationship+status&jjb=single'
const randomNumb = Math.floor(Math.random()*15)

export function getRelStatus() {
  // return request.get(relStatus)
  // .then(res => console.log(res[randomNumb].word))
  return request.get('/api/relationship').then(res => res)
}
