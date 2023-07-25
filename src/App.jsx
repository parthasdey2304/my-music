import React from 'react'
// import Sidebar from './Components/Sidebar'
// import Mainpage from './Components/Mainpage';
// import Controlspage from './Components/Controlspage';

function App() {
  return (
    <div className="App flex">
      <div className='p-[20px] h-screen w-[20%] bg-white/20'>
        <div className='flex-col p-4'>
          <div className='flex'>
            <i class="ri-music-2-fill text-white text-8xl"></i>
            <p className='text-5xl font-semibold p-4'>My Music</p>
          </div>

          <div className="flex pt-[100px]">
            <p className='text-white/60 font-bold text-xl'>MENU</p>
          </div>
        </div>
      </div>

      <div className='p-[20px] h-screen w-[60%] border'>Mainpage</div>

      <div className='p-[20px] h-screen w-[20%] border'>Controlspage</div>
    </div>
  );
}

export default App;
