// eslint-disable-next-line @typescript-eslint/no-unused-vars
import  react from 'react'
import { useState } from 'react';
import { useSelector } from 'react-redux';
import Navbar from './components/navbar/Navbar';
type stateProp={
  theme:string
}


function App() {
  const [selectedPage, setSelectedPage] = useState('home');
  const theme = useSelector((state: stateProp) => state.theme);
 console.log(theme)

  return (
    <>
   

    
    <div className={'app bg-gray-20 dark:bg-slate-900' + (theme === 'dark' ? ' dark' : '')}>
      
   <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
    </div>
     
    </>
  )
}

export default App
