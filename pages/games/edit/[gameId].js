import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSingleGame } from '../../../utils/data/gameData';
import GameForm from '../../../components/game/GameForm';

// fixed export issue. Remember: Deffault acceptable if only function vs doing it at end of code in this file w. mult exports.
export default function EditGame() {
  const [editGame, setEditGame] = useState({});
  const router = useRouter();

  const { gameId } = router.query;

  useEffect(() => {
    getSingleGame(gameId).then(setEditGame);
  }, [gameId]);

  return (
    <>
      <GameForm gameObj={editGame} />
    </>
  );
}
