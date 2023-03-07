import { useState } from 'react'

const MatchUp = ({ fighters }) => {
  const [fighter1, setFighter1] = useState(fighters[0])
  const [fighter2, setFighter2] = useState(fighters[1])
  const [fighter1Class, setFighter1Class] = useState('fighter')
  const [fighter2Class, setFighter2Class] = useState('fighter')

  const handleClickFighter1 = (e) => {
    setFighter1Class('winner')
    setFighter2Class('loser')
  }

  const handleClickFighter2 = (e) => {
    setFighter2Class('winner')
    setFighter1Class('loser')
  }

  return (
    <>
      <div>
        <button className={fighter1Class} onClick={(e) => handleClickFighter1()}>
          <h3>
            {fighter1.FirstName} {fighter1.LastName}
          </h3>
        </button>
      </div>
      vs
      <div>
        <button className={fighter2Class} onClick={(e) => handleClickFighter2()}>
          <h3>
            {fighter2.FirstName} {fighter2.LastName}
          </h3>
        </button>
      </div>
    </>
  )
}

export default MatchUp
