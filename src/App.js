import { useEffect, useState } from 'react'
import FightCard from './components/fightCard/fightCard'
import NavBar from './components/navBar/navBar'
import './App.css'

const App = () => {
  const [schedule, setSchedule] = useState(null)
  const [eventId, setEventId] = useState(null)
  const [matchUps, setMatchUps] = useState(null)
  const today = new Date()
  const currentYear = today.getFullYear()
  
  useEffect(() => {
    fetch(
      `https://api.sportsdata.io/v3/mma/scores/json/Schedule/UFC/${currentYear}?key=2182ee43c6a142abb19f2461ce29b13e`,
    )
      .then((response) => response.json())
      .then((data) => {
        const upcoming = data.filter((event) => Date.parse(event.Day) > today).sort((a,b) => Date.parse(a.Day) - Date.parse(b.Day))
        setSchedule(upcoming.slice(0,4))
        setEventId(upcoming[0].EventId)
        getMatchups(upcoming[0].EventId)
      })
      .catch((err) => console.error(err))
  },[])

  const getMatchups = (eventId) => {
    fetch(
      `https://api.sportsdata.io/v3/mma/scores/json/Event/${eventId}?key=2182ee43c6a142abb19f2461ce29b13e`,
    )
      .then((response) => response.json())
      .then((data) => {
        setMatchUps(data.Fights)
      })
      .catch((err) => console.error(err))
  }
  
  return (
    <div>
      {schedule && <NavBar schedule={schedule} getMatchups={getMatchups} eventId={eventId} setEventId={setEventId} />}
      {matchUps && (<FightCard matchUps={matchUps} />
      )}
    </div>
  )
}

export default App
