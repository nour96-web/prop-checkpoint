import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { players } from './Players';
import PlayerList from './components/PlayerList';

function App() {
  const playerinfo = players;
  const showdetails = (name, number) => {
    alert(`${name} has ${number} ballon d'or`);
  }
  return (
    <div className="App">
      <PlayerList playersinfo={playerinfo} showdetails={showdetails} />
    </div>
  );
}

export default App;
