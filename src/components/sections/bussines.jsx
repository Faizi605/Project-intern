function Bussines () {
    return (
        <div className="lg:flex justify-evenly items-center bg-navbg py-10">
            <div className="lg:text-right text-center">
                    <span className="md:text-4xl text-2xl font-semibold text-herogray">Helping a local </span><br />
                    <span className="md:text-4xl text-2xl font-semibold text-grass">business reinvent itself</span>
                    <p className="text-[16px]">We reached here with our hard work and dedication</p>
            </div>
            <div className="flex justify-center items-center">
            <div className="grid sm:grid-cols-2 gap-8 md:m-0 sm:ml-30">
                    <div className="sm:flex  "> 
                        <img src="/membericon.svg" alt="...." />
                        <div>
                            <h1 className="text-[28px] font-bold text-herogray">2,245,341</h1>
                        <p className="text-para">Members</p>
                        </div>
                    </div>
                    <div className="sm:flex">
                        <img src="/clubicon.svg" alt="" />
                        <div>
                            <h1 className="text-[28px] font-bold text-herogray">46,328</h1>
                        <p className="text-para">Clubs</p>
                        </div>
                    </div>
                    <div className="sm:flex">
                        <img src="/bookingicon.svg" alt="" />
                        <div>
                            <h1 className="text-[28px] font-bold text-herogray">828,867</h1>
                        <p className="text-para">Event Bookings</p>
                        </div>
                    </div>
                    <div className="sm:flex">
                        <img src="/paymenticon.svg" alt="" />
                        <div>
                            <h1 className="text-[28px] font-bold text-herogray">1,926,436</h1>
                        <p className="text-para">Payments</p>
                        </div>
                    </div>
            </div>
            </div>
        </div>
    )
}
export default Bussines