import {Button} from "@ui"


function Pixel ()  {
  return (
    <div className="lg:flex justify-center items-center gap-6 py-10 my-6 px-6">
        <div className="grid  place-content-center">
            <img src="/mobile.svg" alt="Loading..." />
        </div>
        <div className="flex justify-center items-center">
            <div className="lg:text-left text-center lg:max-w-xl max-w-md w-full mt-6 lg:mt-0 ">
                <h1 className="font-semibold text-herogray lg:text-4xl md:text-3xl sm:text-2xl ">The unseen of spending three years at Pixelgrade</h1>
                <p className="text-para md:text-[14px] text-[10px] text-wrap">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
            <Button value='Learn More' classes='bg-grass text-white px-6 py-2 mt-5 rounded'/>
            </div>
        </div>
    </div>
  )
}

export default Pixel