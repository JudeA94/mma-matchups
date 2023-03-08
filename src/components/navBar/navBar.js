import { useState } from 'react'

const NavBar = ({ schedule, eventId, setEventId }) => {
  const [eventIdx, setEventIdx] = useState(0)
  const today = new Date()
  const upcoming = schedule.filter((event) => Date.parse(event.Day) > today)
  const eventsRemaining = upcoming.length - 1
  const handleChangeEvent = (direction) => {
    setEventIdx(eventIdx + direction)
    setEventId(eventId + direction)
  } 

  return (
    <div className='navBar'>
      <div className='navChild'>
        {eventIdx > 0 && (
          <button className='navButton' onClick={() => handleChangeEvent(-1)}>Previous</button>
        )}
      </div>
      <div className='navChild'>
        <h1 className='eventTitle'>{upcoming[eventIdx].Name}</h1>
      </div>
      <div className='navChild'>
        {eventIdx < eventsRemaining && (
          <button className='navButton' onClick={() => handleChangeEvent(+1)}>Next</button>
        )}
      </div>
    </div>
  )
}

export default NavBar
