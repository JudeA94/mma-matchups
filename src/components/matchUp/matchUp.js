import { useState } from 'react'

const MatchUp = ({ fighters }) => {
  const [fighter1, setFighter1] = useState(fighters[0])
  const [fighter2, setFighter2] = useState(fighters[1])
  const [fighter1Class, setFighter1Class] = useState('drawer')
  const [fighter2Class, setFighter2Class] = useState('drawer')
  const [method, setMethod] = useState('Method')

  const handleClickFighter1 = () => {
    if (fighter1Class === 'winner') {
      setFighter1Class('drawer')
      setFighter2Class('drawer')
      setMethod('Draw')
    } else {
      setFighter1Class('winner')
      setFighter2Class('loser')
    }
  }

  const handleClickFighter2 = () => {
    if (fighter2Class === 'winner') {
      setFighter1Class('drawer')
      setFighter2Class('drawer')
      setMethod('Draw')
    } else {
      setFighter2Class('winner')
      setFighter1Class('loser')
    }
  }

  return (
    <div className="matchUp">
      <div className="fighters">
        <button
          className={fighter1Class}
          data-testid="fighter1TestId"
          onClick={handleClickFighter1}
        >
          {fighter1.FirstName} {fighter1.LastName}
        </button>
        <span className="vs" data-testid="vsTestId">
          VS
        </span>
        <button
          className={fighter2Class}
          data-testid="fighter2TestId"
          onClick={handleClickFighter2}
        >
          {fighter2.FirstName} {fighter2.LastName}
        </button>
        <div class="dropdown">
          <button class="dropbtn">{method}</button>
          <div class="dropdown-content">
            <button onClick={() => setMethod('KO / TKO')}>KO / TKO</button>
            <button onClick={() => setMethod('Submission')}>Submission</button>
            <button onClick={() => setMethod('Decision')}>Decision</button>
            <button onClick={() => setMethod('DQ / NC')}>DQ / NC</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MatchUp
