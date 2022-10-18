import './App.css';
import Home from './Components/Home/Home';
import Placement from './Components/Placement/Placement';
import{Routes,Route} from 'react-router-dom'
import Academics from './Components/Academics/Academics';
import Codeing from './Components/Codeing/Codeing';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/placement" element={<Placement/>}/>
        <Route path="/academics" element={<Academics/>}/>
        <Route path="/coding" element={<Codeing/>}/>
      
      </Routes>
    </div>
  );
}

export default App;
