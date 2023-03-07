import { useState } from 'react';
import MatchUp from './components/matchUp/matchUp';
import './App.css';

const App = () => {
  const [schedule, setSchedule] = useState(null)
  const [eventId, setEventId] = useState(null)
  const [matchUps, setMatchUps] = useState(null)
  const currentYear = new Date().getFullYear()

const getSchedule = () => {
  fetch(`https://api.sportsdata.io/v3/mma/scores/json/Schedule/UFC/${currentYear}?key=2182ee43c6a142abb19f2461ce29b13e`)
  .then(response => response.json())
  .then(data => {
    setSchedule(data)
    setEventId(data[8].EventId)
  })
  .catch(err => console.error(err));
}

const getMatchups = () => {
  fetch(`https://api.sportsdata.io/v3/mma/scores/json/Event/${eventId}?key=2182ee43c6a142abb19f2461ce29b13e`)
  .then(response => response.json())
  .then(data => {
    console.log(data)
    setMatchUps(data.Fights)
  })
  .catch(err => console.error(err));
}
  return (
    <div>
    <button onClick={getSchedule}>load schedule</button>
    {schedule && <h1>{schedule[8].Name}</h1>}
    <button onClick={getMatchups}>load fights</button>
    {matchUps && (
  <div className='fightCard'>
    {matchUps.map((fight) => {
      if (fight.Active) return <MatchUp key={fight.FightId} fighters={fight.Fighters} />
      return null;
    })}
  </div>
)}
    </div>
  );
}

export default App;
