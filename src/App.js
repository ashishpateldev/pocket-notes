import React from 'react';
import Main from './components/main.png';

function App() {
      return (
            <>
                  <div class='flex'>
                        <div class='h-[100vh] w-[28em] bg-white m-0 p-0'>
                              <h1>Pocket Notes</h1>
                        </div>


                        <div class='h-[100vh] w-[72em] p-0 bg-[rgba(218,229,245,1)]'>
                              <img src={Main} class='w-[34em] mt-32 ml-60'></img>
                              <h1 class='text-5xl font-bold ml-[8em] mt-4'>Pocket Notes</h1>
                              <p class='text-xl ml-60 mt-4 font-bold'>Send and receive messages without keeping your phone online.</p>
                              <p class='text-xl ml-60 font-bold'>Use Pocket Notes on up to 4 linked devices and 1 mobile phone</p>
                        </div>
                  </div>

            </>
      )
}

export default App