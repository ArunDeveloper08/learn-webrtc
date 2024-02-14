
import './App.css';
import { Routes , Route} from "react-router-dom";
import LobbyScreen from './screens/Lobby';

function App() {
  return (
    <div>
<Routes>
  <Route path="/" element={<LobbyScreen/>}/>
</Routes>
      
    </div>
  );
}

export default App;
