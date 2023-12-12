import React, { useState } from 'react'
import backgroundImage from '../../images/banner.png'
import '../../styles/download.css'
const Download = () => {
  const [tab, setTab] = useState(0);
  return (
    <div className='dem'>
      <p className='text-center text-white text-3xl font-serif font-bold p-2'>Downloads</p>
      <div className="btn-group p-2" role="group" aria-label="Basic example">
        <button type="button" onClick={() => setTab(0)} className={`btn btn-secondary ${tab == 0 ? "bg-slate-500" : ""}`}>Intranet</button>
        <button type="button" onClick={() => setTab(1)} className={`btn btn-secondary ${tab == 1 ? "bg-slate-500" : ""}`}>New Faculty Kit</button>
        <button type="button" onClick={() => setTab(2)} className={`btn btn-secondary ${tab == 2 ? "bg-slate-500" : ""}`}>SRIC Rules</button>
        <button type="button" onClick={() => setTab(3)} className={`btn btn-secondary ${tab == 3 ? "bg-slate-500" : ""}`}>Newsletter</button>
      </div>
      {(tab == 0) && <>
        <p className='text-center text-white text-3xl font-serif font-bold p-2 pb-4 '>Intranet</p>

      </>

      }
      {(tab == 1) && <>
        <p className='text-center text-white text-3xl font-serif font-bold p-2 pb-4 '> New Faculty</p>

      </>

      }
       {(tab == 2) && <>
        <p className='text-center text-white text-3xl font-serif font-bold p-2 pb-4 '>SRIC Rules</p>

      </>

      }
       {(tab == 3) && <>
        <p className='text-center text-white text-3xl font-serif font-bold p-2 pb-4 '>Newsletter</p>
      </>

      }
    </div>
  )
}

export default Download
