import { useState } from 'react'

const MatchUp = ({ fighters }) => {
  const [fighter1, setFighter1] = useState(fighters[0])
  const [fighter2, setFighter2] = useState(fighters[1])
  const [fighter1Class, setFighter1Class] = useState('drawer')
  const [fighter2Class, setFighter2Class] = useState('drawer')

  const handleClickFighter1 = () => {
    if (fighter1Class === 'winner') {
      setFighter1Class('drawer')
      setFighter2Class('drawer')
    } else {
      setFighter1Class('winner')
      setFighter2Class('loser')
    }
  }

  const handleClickFighter2 = () => {
    if (fighter2Class === 'winner') {
      setFighter1Class('drawer')
      setFighter2Class('drawer')
    } else {
      setFighter2Class('winner')
      setFighter1Class('loser')
    }
  }

  return (
    <div className="matchUp">
      <div className="fighters">
        <button className={fighter1Class} data-testid="fighter1TestId" onClick={handleClickFighter1}>
          {fighter1.FirstName} {fighter1.LastName}
        </button>
        <span className="vs" data-testid="vsTestId">VS</span>
        <button className={fighter2Class} data-testid="fighter2TestId" onClick={handleClickFighter2}>
          {fighter2.FirstName} {fighter2.LastName}
        </button>
      </div>
    </div>
  )
}

export default MatchUp
