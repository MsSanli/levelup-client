import { clientCredentials } from '../client';

const getGames = () => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/games`)
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

// This function will send a POST request to your server to create a new game with the details provided by the user.
const createGame = (game) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/games`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(game),
  })
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

// This function will fetch all game types from your server, which will be used to populate a dropdown menu in your form.
const getGameTypes = () => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/gametypes`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application.json',
    },
  })
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

// eslint-disable-next-line import/prefer-default-export
export { getGames, createGame, getGameTypes };
