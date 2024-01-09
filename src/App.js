import React from 'react';
import Main from './components/main.png';

function App() {
      return (
            <>
                  <div class='flex'>
                        <div class='overflow-scroll h-[100vh] w-[24em] bg-white m-0 p-0'>
                              <h1 class='fixed text-4xl font-bold ml-20 mt-8 mb-8'>Pocket Notes</h1>

                              <div class='mt-[8em] flex'>
                                    <div class='h-16 w-16 bg-[rgba(0,71,255,1)] rounded-full text-white flex items-center justify-center ml-4 font-bold mb-5'>MN</div>
                                    <p class='text-xl font-bold m-4 ml-7'>My Notes</p>
                              </div>

                              <div class='flex'>
                                    <div class='h-16 w-16 bg-[rgba(179,139,250,1)] rounded-full text-white flex items-center justify-center ml-4 font-bold mb-5'>MP</div>
                                    <p class='text-xl font-bold m-4 ml-7'>My Personal grp</p>
                              </div>

                              <div class='flex'>
                                    <div class='h-16 w-16 bg-[rgba(255,192,192,1)] rounded-full text-white flex items-center justify-center ml-4 font-bold mb-5'>JG</div>
                                    <p class='text-xl font-bold m-4 ml-7'>Javascript grp</p>
                              </div>

                              <div class='flex'>
                                    <div class='h-16 w-16 bg-[rgba(67,230,252,1)] rounded-full text-white flex items-center justify-center ml-4 font-bold mb-5'>HG</div>
                                    <p class='text-xl font-bold m-4 ml-7'>HTML grp</p>
                              </div>

                              <div class='flex'>
                                    <div class='h-16 w-16 bg-[rgba(241,149,118,1)] rounded-full text-white flex items-center justify-center ml-4 font-bold mb-5'>CN</div>
                                    <p class='text-xl font-bold m-4 ml-7'>CSS Notes</p>
                              </div>

                              <div class='flex'>
                                    <div class='h-16 w-16 bg-[rgba(102,145,255,1)] rounded-full text-white flex items-center justify-center ml-4 font-bold mb-5'>SN</div>
                                    <p class='text-xl font-bold m-4 ml-7'>SQL Notes</p>
                              </div>

                              <div class='flex'>
                                    <div class='flex'>
                                    <div class='h-16 w-16 bg-[rgba(255,102,240,1)] rounded-full text-white flex items-center justify-center ml-4 font-bold mb-5'>PN</div>
                                    <p class='text-xl font-bold m-4 ml-7'>Python Notes</p>
                                    </div>

                                    <div>
                                    <div class='fixed ml-7 h-16 w-16 bg-[rgba(22,0,139,1)] rounded-full text-white flex items-center justify-center font-bold text-3xl'>+</div>
                                    </div>
                              </div>

                              <div class='flex'>
                                    <div class='h-16 w-16 bg-[rgba(55,12,24,1)] rounded-full text-white flex items-center justify-center ml-4 font-bold mb-5'>PN</div>
                                    <p class='text-xl font-bold m-4 ml-7'>ReactJs Notes</p>
                              </div>

                              
                              <div class='flex'>
                                    <div class='h-16 w-16 bg-[rgba(185,121,270,1)] rounded-full text-white flex items-center justify-center ml-4 font-bold mb-5'>PN</div>
                                    <p class='text-xl font-bold m-4 ml-7'>C# Notes</p>
                              </div>

                              
                              <div class='flex'>
                                    <div class='h-16 w-16 bg-[rgba(100,200,240,1)] rounded-full text-white flex items-center justify-center ml-4 font-bold mb-5'>PN</div>
                                    <p class='text-xl font-bold m-4 ml-7'>NodeJs Notes</p>
                              </div>

                              

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