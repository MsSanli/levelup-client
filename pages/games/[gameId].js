import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSingleGame } from '../../utils/data/gameData';

export default function ViewGame() {
  const [gameDeets, setGameDeets] = useState({});
  const router = useRouter();

  const { gameId } = router.query;

  const getGameDeets = () => {
    getSingleGame(gameId).then(setGameDeets);
  };

  useEffect(() => {
    getGameDeets();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameId]);

  return (
    <>
      <h1>Game: {gameDeets.title}</h1>
      <h2>Made by: {gameDeets.make}</h2>
      <h2>Number of Players: {gameDeets.number_of_players}</h2>
      <h2>Skill Level: {gameDeets.skill_level}</h2>
      <h2>GameType: {gameDeets.game_type?.label}</h2>
    </>
  );
}
