
import './App.css';

import { Route, Routes } from 'react-router-dom';
import AutoRoot from 'hooks/AutoRoot';


function App() {
  //Перенаправление на страницу с логином//
  return (
    <Routes>
      <Route path='/' element={<AutoRoot/>}/>
      <Route path='/login' element={<AutoRoot/>}/>
    </Routes>
  );
}

export default App;
