import { Button } from '@ui'
import { companyList, support } from "@constants"
function Footer() {
    return (
        <div>
            <div className='flex flex-col justify-center items-center text-center bg-navbg pt-5 '>
                <h1 className='lg:text-[64px] md:text-5xl sm:text-3xl text-Brand font-semibold max-w-[887px] px-20 py-4 leading-tight'>Pellentesque suscipit fringilla libero eu.</h1>
                <div className='relative'>
                <Button value='Get a Demo' classes="bg-grass md:py-[14px] py-[10px] md:px-[32px] px-20px my-4 text-white rounded-sm md:text-[16px] text-[12px]" />
                <img src="/Down.svg" alt="" className='hidden md:flex absolute bottom-9 right-4' />
                </div>

            </div>

            <div className='bg-Brand flex justify-between flex-wrap md:gap-24 gap-8  lg:px-40 md:px-30 px-20 py-16'>
                <div className='flex flex-col gap-10 '>
                    <div className="flex">
                        <img src="/footericon.svg" alt="" />
                        <h1 className="text-white font-bold sm:text-3xl text-xl ">Nexcent</h1>
                    </div>
                    <div className='md:text-[14px] text-[10px] text-navbg'>
                        <p>Copyright © 2020 Nexcent ltd.</p>
                        <p>All rights reserved</p>
                    </div>
                    <div className='flex gap-5'>
                        <img src="/insta.svg" alt="" className='bg-herogray p-2 rounded-full ' />
                        <img src="/Ball.svg" alt="" className='bg-herogray p-2 rounded-full ' />
                        <img src="/Twitter.svg" alt="" className='bg-herogray p-2 rounded-full ' />
                        <img src="/facebook.svg" alt="" className='bg-herogray p-2 rounded-full'/>
                    </div>
                </div>

                
                    <div className='md:m-0 mt-5'>
                        <h1 className='text-navbg font-semibold text-xl mb-6'>Company</h1>
                        <div className=' text-sm '>
                            {companyList.map((list, index) => (
                                <Button value={list} key={index} classes='text-navbg mb-4' />
                            ))}
                        </div>
                    </div>

                    <div className='md:m-0 mt-5'>
                        <h1 className='text-navbg font-semibold text-xl mb-6'>Support</h1>
                        <div className=' text-sm'>
                            {support.map((list, index) => (
                                <Button value={list} key={index} classes='text-navbg mb-4' />
                            ))}
                        </div>
                    </div>
                    
                    

                    <div className='md:m-0 mt-5'>
                            <h1 className='text-navbg font-semibold sm:text-xl text-md mb-6'>Stay up to date</h1>
                            <div className='relative'>
                            <input type="email" placeholder={'Your email address'} className='bg-gray-400 outline-0 p-2  sm:text-[14px] text-[10px]  rounded-lg w-auto text-navbg ' />
                            <img src="/send.svg" alt=""  className='absolute bottom-2 right-3'/>
                            </div>
                    </div>
                

            </div>




        </div>
    )
}
export default Footer;