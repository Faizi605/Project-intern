function Community (){
    return(
        <div>
            <div className="text-center"> 
                <div className="text-base/7 my-2">
                <span className="font-semibold lg:text-4xl md:text-3xl sm:text-2xl text-herogray">Manage your entire community </span><br />
                <span className="lg:text-4xl md:text-3xl sm:text-2xl font-semibold text-herogray">in a single system</span>
                </div>
                <p className="text-para">Who is Nextcent suitable for?</p>
            </div>
            <div className=" flex flex-wrap  gap-10 justify-evenly items-center px-6 my-6">
                <div className="shadow-md flex justify-center items-center flex-col text-center p-5 h-box w-boxwidth rounded-md">
                        <img src="/member.svg" alt="..." />
                        <h1 className="md:text-[28px] text-[20px] font-bold">Membership Organisations</h1>
                        <p className="text-para text-[14px]">Our membership management software provides full automation of membership renewals and payments</p>
                </div>
                <div className=" shadow-md flex justify-center items-center flex-col text-center p-5 h-box w-boxwidth rounded-md">
                        <img src="/national.svg" alt="..." />
                        <h1 className="md:text-[28px] text-[20px] font-bold">National Associations</h1>
                        <p className="text-para text-[14px]">Our membership management software provides full automation of membership renewals and payments</p>
                </div>
                <div className=" shadow-md flex justify-center items-center flex-col text-center p-5 h-box w-boxwidth rounded-md">
                        <img src="/club.svg" alt="..." />
                        <h1 className="md:text-[28px] text-[20px] font-bold">Clubs And Groups</h1>
                        <p className="text-para text-[14px]">Our membership management software provides full automation of membership renewals and payments</p>
                </div>
            </div>
        </div>
    )
    
}
export default Community;