import './App.css';
import SearchComponent from './Components/SearchComponent';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Homepage from './Components/Homepage';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<SearchComponent/>}/>
          <Route path='/home/:username' element={<Homepage/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
