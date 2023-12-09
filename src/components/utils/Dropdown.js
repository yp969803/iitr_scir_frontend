import React, { useState } from 'react'

const Dropdown = () => {
    let [download, setDownload] = useState(false);
  return (

    <div>
       <button onClick={() => { setDownload(!download) }} className='text-gray-800 hover:text-gray-400 duration-500'>Download{!download ? (<i class="bi bi-arrow-down-short"></i>
              ) : (<></>)} </button>
              {
                download&&<ul className='absolute bg-white drop'>
                  <li>hello</li>
                  <li>hello</li>
                  <li>hello</li>

                </ul>
              }
    </div>
  )
}

export default Dropdown
