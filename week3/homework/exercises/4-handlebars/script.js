
/**
 * 4. Fun with Handlebars
 * 
 * Write a javascript function that simulates playing the game cards against humanity.
 * The code should choose a subject and a punchline at random,
 * then replace them in a sentece using handlebars.
 * 
 * Hints:
 * - Check the handlebars npm page for examples and documentation
 */
 const handlebars = require('handlebars');

const subjects = [
  'shark',
  'popcorn',
  'poison',
  'fork',
  'cherry',
  'toothbrush',
  'cannon',
];

const punchlines = [
  'watch movie with',
  'spread some love',
  'put on cake',
  'clean toilets',
  'go to the moon',
  'achieve world piece',
  'help people learn programing',
];

function drawCard() {
  // YOUR CODE GOES IN HERE
  const card = '{{subject}} is great to {{punchline}}';
  const template = handlebars.compile(card)
  const result = template({subject: getRandomElement(subjects), punchline: getRandomElement(punchlines)})
  console.log(result)
}

drawCard();

/**
 * Given an array, return an element from it chosen at random
 */
function getRandomElement(array) {
  // YOUR CODE GOES IN HERE
  return array[Math.floor((Math.random()*array.length))];
}