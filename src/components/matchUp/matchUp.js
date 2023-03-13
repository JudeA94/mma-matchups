import { useState, useContext } from 'react'
import { PredictionsContext } from '../../context/predictionsContext'

const MatchUp = ({ fighters }) => {
  const fighter1 = fighters[0]
  const fighter2 = fighters[1]
  const fight = `${fighter1.FirstName} ${fighter1.LastName} vs ${fighter2.FirstName} ${fighter2.LastName}`
  const [fighter1Class, setFighter1Class] = useState('drawer')
  const [fighter2Class, setFighter2Class] = useState('drawer')
  const [winner, setWinner] = useState(null)
  const [method, setMethod] = useState('Method')
  const predictions = useContext(PredictionsContext)

  const handleClickFighter1 = () => {
    if (fighter1Class === 'winner') {
      setFighter1Class('drawer')
      setFighter2Class('drawer')
      setMethod('Method')
      setWinner(null)
      updatePrediction(winner,method)
    } else {
      setFighter1Class('winner')
      setFighter2Class('loser')
      setWinner(`${fighter1.FirstName} ${fighter1.LastName}`)
      updatePrediction(winner,method)
    }
  }

  const handleClickFighter2 = () => {
    if (fighter2Class === 'winner') {
      setFighter1Class('drawer')
      setFighter2Class('drawer')
      setMethod('Method')
      setWinner(null)
      updatePrediction(winner,method)
    } else {
      setFighter2Class('winner')
      setFighter1Class('loser')
      setWinner(`${fighter2.FirstName} ${fighter2.LastName}`)
      updatePrediction(winner,method)
    }
  }

  const handleMethodSelection = (method) => {
    setMethod(method)
    updatePrediction(winner,method)
    console.log(predictions)
  }

  const updatePrediction = (winner, method) => {
    if (!winner || !method) predictions[fight] = null
    predictions[fight] = `${winner} by ${method}`
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
        <div className="dropdown">
          <button className="dropbtn">{method}</button>
          <div className="dropdown-content">
            <button onClick={() => handleMethodSelection('KO / TKO')}>KO / TKO</button>
            <button onClick={() => handleMethodSelection('Submission')}>Submission</button>
            <button onClick={() => handleMethodSelection('Decision')}>Decision</button>
            <button onClick={() => handleMethodSelection('DQ / NC')}>DQ / NC</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MatchUp
