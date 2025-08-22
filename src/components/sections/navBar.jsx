import { Button } from "@ui"
import { useState } from "react"
import { FaBars } from "react-icons/fa"
import { buttons } from "@constants/logo"



function Navbar() {
  const buttonsList = buttons.map((btn, index) => (
    <Button value={btn} key={index} classes={`${index === 0 && 'font-semibold'}`} />
  ));

  const [visible, setVisible] = useState(false)
  return (
    <div className="bg-navbg md:py-navp md:px-navleft p-6">

      <div className="flex justify-between  items-center md:gap-0 gap-10">

        <div className="flex">
          <img src="/nav-icon.svg" alt="" />
          <h1 className="text-Brand font-bold text-3xl ">Nexcent</h1>
        </div>

        <div className="xl:flex   gap-13 hidden  ">
          {
            buttonsList
          }

        </div>

        <div className="hidden md:flex gap-3 ">
          <Button value='Login' classes="text-grass sm:px-3 px-2 py-2 sm:text-[14px] text-[10px]" />
          <Button value='Sign up ' classes="bg-grass sm:px-3 px-2 py-2 text-white rounded-md sm:text-[14px] text-[10px]" />
        </div>
        <div className="md:hidden flex" >
          <FaBars onClick={() => setVisible(!visible)} />
        </div>
      </div>
      <div>
        {
          visible && (
            <div>
              <div className="lg:hidden flex flex-col gap-6">
                <Button value='Home' />
                <Button value='Service' />
                <Button value='Feature' />
                <Button value='Product' />
                <Button value='Testimonial' />
                <Button value='FAQ' />
              </div>
              <div className="flex">
                <Button value='Login' classes="text-grass sm:px-3 px-2 py-2 sm:text-[14px] text-[10px]" />
                <Button value='Sign up ' classes="bg-grass sm:px-3 px-2 py-2 text-white rounded-md sm:text-[14px] text-[10px]" />
              </div>
            </div>


          )
        }
      </div>
    </div>
  )
}

export default Navbar