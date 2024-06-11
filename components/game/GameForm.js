import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import { createGame, getGameTypes, updateGame } from '../../utils/data/gameData';
import { useAuth } from '../../utils/context/authContext';

const initialState = {
  skillLevel: 1,
  numberOfPlayers: 0,
  title: '',
  make: '',
  gameType: 0,
};

function GameForm({ gameObj }) {
  const [gameTypes, setGameTypes] = useState([]);
  const [currentGame, setCurrentGame] = useState(initialState);
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    // get types then set
    getGameTypes().then(setGameTypes);

    if (gameObj.id) {
      setCurrentGame({
        id: gameObj.id,
        make: gameObj.make,
        title: gameObj.title,
        numberOfPlayers: gameObj.number_of_players,
        skillLevel: gameObj.skill_level,
        gameType: gameObj.game_type?.id,
        userId: user.uid,
      });
    } // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameObj, user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentGame((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    // Prevent form submission
    e.preventDefault();

    if (gameObj.id) {
      const updatedGame = {
        id: gameObj.id,
        make: currentGame.make,
        title: currentGame.title,
        numberOfPlayers: Number(currentGame.numberOfPlayers),
        skillLevel: Number(currentGame.skillLevel),
        gameType: Number(currentGame.gameType),
        userId: user.uid,
      };

      updateGame(updatedGame, user.uid).then(() => router.push('/games'));
    } else {
      const game = {
        make: currentGame.make,
        title: currentGame.title,
        numberOfPlayers: Number(currentGame.numberOfPlayers),
        skillLevel: Number(currentGame.skillLevel),
        gameType: Number(currentGame.gameType),
        userId: user.uid,
      };
      createGame(game, user.uid).then(() => router.push('/games'));
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">

          <Form.Label>Title</Form.Label>
          <Form.Control name="title" required value={currentGame.title} onChange={handleChange} />

          <Form.Label>Maker</Form.Label>
          <Form.Control name="make" required value={currentGame.make} onChange={handleChange} />

          <Form.Label>Number of Players</Form.Label>
          <Form.Control name="numberOfPlayers" required value={currentGame.numberOfPlayers} onChange={handleChange} />

          <Form.Label>Skill Level</Form.Label>
          <Form.Control name="skillLevel" required value={currentGame.skillLevel} onChange={handleChange} />

          <Form.Label>Game Type</Form.Label>
          <Form.Select name="gameType" required value={currentGame.gameType} onChange={handleChange}>
            <option value="">Select Gt:</option>
            {/* mapping Capstone reference for drop down */}
            {
                gameTypes.map((gameType) => (
                  <option
                    key={gameType.id}
                    value={gameType.id}
                  >
                    {gameType.label}
                  </option>
                ))
              }
          </Form.Select>

        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
}

GameForm.propTypes = {
  gameObj: PropTypes.shape({
    id: PropTypes.number,
    number_of_players: PropTypes.number,
    skill_level: PropTypes.number,
    make: PropTypes.string,
    title: PropTypes.string,
    // add in game type prop
    game_type: PropTypes.shape({
      id: PropTypes.number,
      label: PropTypes.string,
    }),
  }),
};

GameForm.defaultProps = {
  gameObj: initialState,
};

export default GameForm;
