
import  {Button} from "@ui"

function Hero  ()  {
  return (
    <div className="relative">
    <div className='bg-navbg flex md:flex-row flex-col md:text-left text-center justify-center items-center gap-14 py-14 px-10'>
            <div className="">
                    <span className='lg:text-[64px] md:text-5xl text-3xl  font-semibold text-herogray'>Lessons and insights </span><br />
                    <span className='lg:text-[64px] md:text-5xl text-3xl text-grass font-semibold'>from 8 years</span>
                    <p className='text-[16px] text-para pt-5'>Where to grow your business as a photographer: site or social media?</p>
                    <div className="mt-5"> 
                        <Button value="Register" classes="bg-grass text-white px-6 rounded  py-3"/>
                    </div>

            </div>
                    <div className="w-auto">
                        <img src="/Illustration.svg" alt="Loading..." />
                    </div>
    </div>
    <div className="xl:absolute xl:bottom-5 xl:left-160  hidden xl:flex ">
        <img src="Dot.svg" alt="..." />
    </div>
    </div>
  )
}

export default Hero