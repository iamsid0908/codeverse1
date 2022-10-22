import './App.css';
import Home from './Components/Home/Home';
import Placement from './Components/Placement/Placement';
import{Routes,Route} from 'react-router-dom'
import Academics from './Components/Academics/Academics';
import Codeing from './Components/Codeing/Codeing';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/placement" element={<Placement/>}/>
        <Route path="/academics" element={<Academics/>}/>
        <Route path="/coding" element={<Codeing/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
