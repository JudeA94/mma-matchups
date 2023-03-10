import { useState, useEffect } from 'react';
import MatchUp from '../matchUp/matchUp';

const FightCard = ({ matchUps }) => {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    setMatches(matchUps);
  }, [matchUps]);

  return (
    <>
      {matches.map((fight) => {
        if (fight.Active && fight.Fighters.length) {
          return <MatchUp key={fight.FightId} fighters={fight.Fighters} />;
        }
        return null;
      })}
      <button onClick={() => console.log('fights saved')}>Save Predictions</button>
    </>
  );
};

export default FightCard;
