import React from 'react'
import Link from './Link'
// eslint-disable-next-line @typescript-eslint/ban-types
type props={
    children?:React.ReactNode
    selectedPage:string
    setSelectedPage:(value:string)=>void

  
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function Navbar({selectedPage,setSelectedPage}:props) {
    const flexBetween = ' flex items-center justify-between'
  return (
    <nav>
        <div className={`${flexBetween}fixed top-0 bg-slate-600 z-30 py-6 dark:bg-slate-900`}>
            <div className={`${flexBetween} mx-auto w-5/6 `}>
                <div className={`${flexBetween} w-full bg-slate-400 gap-16` }>
                    {/* left side */}
                    <img className="" src='' alt='logo' />
                </div>
                {/* right side */}
                <div className={`${flexBetween} bg-gray-600 w-full`}>
                    <div className={`${flexBetween} gap-8 text-sm `}>
                       <Link page='Home' selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                       <Link page='About' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                       <Link page='Contact' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                       <Link page='Blog' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />


                    </div>
                    <div className={`${flexBetween} gap-8 text-sm`}>
                        <p>
                            Login
                        </p>
                       <div>
                        Become A member
                       </div>

                    </div>


                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar