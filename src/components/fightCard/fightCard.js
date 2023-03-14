import { useState, useEffect, useContext } from 'react';
import MatchUp from '../matchUp/matchUp';
import { PredictionsContext } from '../../context/predictionsContext'

const FightCard = ({ matchUps }) => {
  const predictions = useContext(PredictionsContext)
  const [mainCard, setMainCard] = useState(null)
  const [undercard, setUnderCard] = useState(null)
  const [viewMainCard, setViewMainCard] = useState(true)

  useEffect(() => {
    const activeMatches = matchUps.filter(match => match.Active && match.Fighters.length)
    setMainCard(activeMatches.slice(0,5))
    setUnderCard(activeMatches.slice(5,-1))
  }, [matchUps]);

  const toggleView = (card) => {
    card === 'Main' ? setViewMainCard(true) : setViewMainCard(false)
  }

  return (
    <>
      <button onClick={() => toggleView('Main')}>Main Card</button><button onClick={() => toggleView('Under')}>Under Card</button>
      {mainCard && viewMainCard && mainCard.map((fight) => <MatchUp key={fight.FightId} fighters={fight.Fighters} />)}
      {undercard && !viewMainCard && undercard.map((fight) => <MatchUp key={fight.FightId} fighters={fight.Fighters} />)}
      <button onClick={() => console.log(predictions)}>Save Predictions</button>
    </>
  );
};

export default FightCard;
