import { useState, useEffect, useContext } from 'react';
import MatchUp from '../matchUp/matchUp';
import { PredictionsContext } from '../../context/predictionsContext'

const FightCard = ({ matchUps }) => {
  const [matches, setMatches] = useState([]);
  const predictions = useContext(PredictionsContext)

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
      <button onClick={() => console.log(predictions)}>Save Predictions</button>
    </>
  );
};

export default FightCard;
