import { clientCredentials } from '../client';

const getGames = () => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/games`)
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

// This function will send a POST request to your server to create a new game with the details provided by the user.
const createGame = (game, uid) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/games`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${uid}`,
    },
    body: JSON.stringify(game),
  })
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

// This function will fetch all game types from your server, which will be used to populate a dropdown menu in your form.
const getGameTypes = () => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/gametypes`)
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

const updateGame = (payload, uid) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/games/${payload.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${uid}`,
    },
    body: JSON.stringify(payload),
  })
    .then(resolve)
    .catch(reject);
});

const getSingleGame = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/games/${id}`)
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

const deleteGame = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/games/${id}`, {
    method: 'DELETE',
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      resolve();
    })
    .catch(reject);
});

// eslint-disable-next-line import/prefer-default-export
export {
  getGames,
  createGame,
  updateGame,
  getSingleGame,
  deleteGame,
  getGameTypes,
};
