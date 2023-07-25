import React from 'react'
import Sidebar from './Components/Sidebar'
import Mainpage from './Components/Mainpage';
import Controlspage from './Components/Controlspage';

function App() {
  return (
    <div className="App flex">
      <div className='p-[20px] h-screen w-[20%] bg-white/20'>
        
      </div>

      <div className='p-[20px] h-screen w-[60%] border'>Mainpage</div>

      <div className='p-[20px] h-screen w-[20%] border'>Controlspage</div>
    </div>
  );
}

export default App;
