import React from 'react';
import NavBar from './Components/NavBar/NavBar';
import './Components/NavBar/NavBar.css'
import "./App.css"
import { action,orginals,comedy} from './urls';
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';
function App() {
  return (
    <div className="App">
      <NavBar/> 
      <Banner/>
      <RowPost url={orginals} title='Netflix Orginals'/>
      <RowPost url={action} title='Action' isSmall/>
      <RowPost url={comedy} title='Comedy Movies' isSmall/>
    </div>
  );
}
export default App;
