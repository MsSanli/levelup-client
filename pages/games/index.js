import React, { useEffect, useState } from 'react';
import GameCard from '../../components/game/GameCard';
import { getGames } from '../../utils/data/gameData';

function Home() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    getGames().then((data) => setGames(data));
  }, []);

  return (
    <article className="games">
      <h1>Games</h1>
      {games.map((game) => (
        <section key={`game--${game.id}`} className="game">
          <GameCard title={game.title} make={game.make} numberOfPlayers={game.number_of_players} skillLevel={game.skill_level} />
        </section>
      ))}
    </article>
  );
}

export default Home;
