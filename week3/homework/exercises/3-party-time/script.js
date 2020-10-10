
/**
 * 3: Party time
 * 
 * After reading the documentation make a request to https://reservation100-sandbox.mxapps.io/rest-doc/api
 * and print the response to the console. Use async-await and try/catch.
 * 
 * Hints:
 * - make sure to use the correct headers and http method in the request
 */

const fetch = require('node-fetch');

async function makeReservation() {
  // YOUR CODE GOES IN HERE
  const reservationDetails = {
    'name': 'Merve Aras',
    'numberOfPeople': 3
  }
  try {
  const response = await fetch('https://reservation100-sandbox.mxapps.io/api/reservations', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(reservationDetails)
  });
  const data = await response.json();
  console.log(data)
    
  } catch (error) {
    console.log('error', error)
  }
}

makeReservation();