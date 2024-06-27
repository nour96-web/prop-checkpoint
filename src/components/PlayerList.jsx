import React from 'react'
import PlayerCard from './PlayerCard'

const PlayerList = ({ playersinfo, showdetails }) => {
  return (
    <div style={{display: "flex", justifyContent: "space-evenly", flexWrap: "wrap"}}>
        {playersinfo.map((el)  => (
         <PlayerCard player={el}  key={el.id}  showdetails={showdetails} />
        ))}
    </div>
  )
}

export default PlayerList