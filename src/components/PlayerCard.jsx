import React from 'react'
import { Button, Card } from 'react-bootstrap'

const PlayerCard = ({ player, showdetails }) => {
  return (
    <div>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={player.imgUrl} />
      <Card.Body>
        <Card.Title>Player name : {player.name} </Card.Title>
        <Card.Text>
          He is an {player.nationality} and aged around {player.age} years old,
           currently playing for {player.team} and wearing the number {player.number}
        </Card.Text>
        <Button onClick={() => showdetails(player.name, player.bdor)} variant="primary">How many ballon d'or</Button>
      </Card.Body>
    </Card>
    </div>
  )
}
PlayerCard.defaultProps = {
    player : {
        id:Math.random(),
         imgUrl :"https://as1.ftcdn.net/v2/jpg/02/50/65/22/1000_F_250652209_Q3EWyMPBQBjJlEKkZFKMNhyqGiH7bMAs.jpg",
         name : "personne5", 
         age : 22, 
         jerseyNumber : 5,
         team : "team5",
         nationality : "nationality5",
         bdor : 0
    }
}
export default PlayerCard