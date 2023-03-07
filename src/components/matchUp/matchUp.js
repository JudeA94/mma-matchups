import { useState } from "react";

const MatchUp = ({fighters}) => {
  const [fighter1, setFighter1] = useState(fighters[0])
  const [fighter2, setFighter2] = useState(fighters[1])
  console.log(fighter1)
  return (
    <>
    <h3>{fighter1.FirstName} {fighter1.LastName} vs {fighter2.FirstName} {fighter2.LastName}</h3>
    </>
   );
}
 
export default MatchUp;