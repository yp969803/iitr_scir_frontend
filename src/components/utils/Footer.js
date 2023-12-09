import React from 'react'

const Footer = () => {
    return (
        <div class="w-full h-auto bg-blue-900 p-2">
            <div class="grid sm:grid-rows-3 md:grid-rows-none sm:grid-cols-none md:grid-cols-3 gap-4">
                <div class=" text-white">
                    <div className="flex flex-col py-4 px-4">
                        <p className='font-bold text-16 pb-3'>DEAN SRIC</p>
                        <p className='font-normal px-2 pb-2'><i class="bi bi-geo-alt-fill"></i> Dean SRIC office,<br/>  James Thomson Building,<br/>IIT Roorkee-247667
                        </p>
                        <hr className='px-2'/>
                        <p className='font-normal px-2 py-2'><i class="bi bi-telephone-fill pr-2"></i> +91-1332-28(5245)
                        </p>
                        <hr className='px-2'/>
                        <p className='font-normal px-2 py-2'><i class="bi bi-envelope pr-2"></i> dsric@iitr.ac.in
                        </p>
                        <p className='pt-3'><i class="bi bi-facebook px-1"></i> <i class="bi bi-twitter px-1"></i> <i class="bi bi-linkedin px-1"></i><i class="bi bi-google px-1"></i></p>
                        
                        

                    </div>
                </div>
                <div class=" px-2 text-white">
                    <div className="flex flex-col py-2 px-4">
                        <p className='font-bold text-16 pb-3'>ASSOCIATE DEAN<br/>(CORPORATE INTERACTION)</p>
                        <p className='font-normal px-2 pb-4'><i class="bi bi-geo-alt-fill"></i> ADCI office, N-6, James Thomson Building,<br/>IIT Roorkee-247667
                        </p>
                        <hr className='px-2'/> <p className='font-normal px-2 py-2'><i class="bi bi-telephone-fill pr-2"></i> +91-1332-28(5245)
                        </p>
                        <hr className='px-2'/>
                        <p className='font-normal px-2 py-2'><i class="bi bi-envelope pr-2"></i> adci@iitr.ac.in
                        </p>


                    </div>
                </div>
                <div class=" px-2 text-white">
                    <div className="flex flex-col py-2 px-4">
                        <p className='font-bold text-16 pb-3'>ASSOCIATE DEAN<br/>(CORPORATE INTERACTION)</p>
                        <p className='font-normal px-2 pb-4'><i class="bi bi-geo-alt-fill"></i> Dean SRIC office, James Thomson Building,<br/>IIT Roorkee-247667
                        </p>
                        <hr className='px-2'/> <p className='font-normal px-2 py-2'><i class="bi bi-telephone-fill pr-2"></i> +91-1332-28(5810)
                        </p>
                        <hr className='px-2'/>
                        <p className='font-normal px-2 py-2'><i class="bi bi-envelope pr-2"></i> adii@iitr.ac.in
                        </p>


                    </div>
                </div>

            </div>
            <p className='text-white text-center'> COPYRIGHT © 2023 - ALL RIGHTS RESERVED - DSRIC OFFICE, IIT ROORKEE</p>
        </div>
    )
}

export default Footer
