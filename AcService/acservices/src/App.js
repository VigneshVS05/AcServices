import './App.css';
import { Routes,Route } from 'react-router-dom';
import Login from './Auth/Login';
import AcAction from './Auth/AcAction';
function App() {
  return (
    <div className='App'>
      
    <Routes>
      <Route path='/Login' element={<AcAction className='App-header'/>} />
      <Route path='/' element={<Login/>} />   
    </Routes>
      </div>
      
  );
}

export default App;


