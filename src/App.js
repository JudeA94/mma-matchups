import { useEffect, useState } from 'react'
import FightCard from './components/fightCard/fightCard'
import NavBar from './components/navBar/navBar'
import './App.css'
import Poster from './components/poster/poster'

const App = () => {
  const [schedule, setSchedule] = useState(null)
  const [eventId, setEventId] = useState(null)
  const [matchUps, setMatchUps] = useState(null)
  const [eventName, setEventName] = useState(null)
  const [dataUrl, setDataUrl] = useState(null)
  const today = new Date()
  const currentYear = today.getFullYear()

  useEffect(() => {
    fetch(
      `https://api.sportsdata.io/v3/mma/scores/json/Schedule/UFC/${currentYear}?key=2182ee43c6a142abb19f2461ce29b13e`,
    )
      .then((response) => response.json())
      .then((data) => {
        const upcoming = data
          .filter(
            (event) =>
              Date.parse(event.Day) > today && event.ShortName.length === 7,
          )
          .sort((a, b) => Date.parse(a.Day) - Date.parse(b.Day))
        setSchedule(upcoming)
        setEventId(upcoming[0].EventId)
        getMatchups(upcoming[0].EventId)
      })
      .catch((err) => console.error(err))
  }, [])

  const getMatchups = (eventId) => {
    fetch(
      `https://api.sportsdata.io/v3/mma/scores/json/Event/${eventId}?key=2182ee43c6a142abb19f2461ce29b13e`,
    )
      .then((response) => response.json())
      .then((data) => {
        setMatchUps(data.Fights)
        setEventName(data.ShortName)
      })
      .catch((err) => console.error(err))
  }

  
  

  return (
    <div className="App">
      {schedule && (
          <div>
            <NavBar
              schedule={schedule}
              getMatchups={getMatchups}
              eventId={eventId}
              setEventId={setEventId}
            />
          </div>
        )}
      <div className="container">
        {eventName && (
          <div className="poster1">
            <Poster eventName={eventName} />
          </div>
        )}
        {matchUps && (
          <div className="fightcard">
            <FightCard matchUps={matchUps} />
          </div>
        )}
        {eventName && (
          <div className="poster2">
            <Poster eventName={eventName} />
          </div>
        )}
      </div>
      
    </div>
  )
}

export default App
