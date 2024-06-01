import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useRouter } from 'next/router';
import { getGames } from '../../utils/data/gameData';
import GameCard from '../../components/game/GameCard';

function Home() {
  const [games, setGames] = useState([]);
  const router = useRouter(); // router variable

  useEffect(() => {
    getGames().then((data) => setGames(data));
  }, []);

  return (
    <article className="games">
      <Button
        onClick={() => {
          router.push('/games/new');
        }}
        className="mb-3"
      >
        Register New Game
      </Button>
      <h1>Games</h1>
      {games.map((game) => (
        <section key={`game--${game.id}`} className="game">
          <GameCard title={game.title} make={game.make} numberOfPlayers={game.numberOfPlayers} skillLevel={game.skilllevel} />
        </section>
      ))}
    </article>

  );
}

export default Home;
