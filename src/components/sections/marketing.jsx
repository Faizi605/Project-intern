function Marketing() {
    return (
        <div className="my-10">
            <div className="flex flex-col justify-center items-center text-center">
                <h1 className="font-semibold md:text-4xl text-3xl text-herogray mb-4 ">Caring is the new marketing</h1>
                <p className="font-normal md:text-[16px] text-[14px] max-w-[626px] text-para px-2 mb-4 ">The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.</p>
            </div>



            <div className="flex justify-center items-center gap-8 flex-wrap">
                <div className="relative mb-12">
                    <div>
                        <img src="/image 18.svg" alt="" />
                    </div>
                    <div className="text-center bg-navbg sm:max-w-[317px] w-auto p-6 absolute bottom-[-50px] left-6 rounded-xl ">
                        <p className="font-semibold sm:text-xl text-lg text-para">Creating Streamlined Safeguarding Processes with OneRen</p>
                        <div className="flex justify-center items-center">
                            <h1 className="font-semibold text-xl text-grass">Read More</h1>
                            <img src="/Right.svg" alt="" />
                        </div>
                    </div>
                </div>


                <div className="relative mb-12">
                    <div>
                        <img src="/image 19.svg" alt="" />
                    </div>
                    <div className="text-center bg-navbg max-w-[317px] p-6 absolute bottom-[-50px] left-6 rounded-xl ">
                        <p className="font-semibold sm:text-xl text-lg text-para">What are your safeguarding responsibilities and how can you manage them?</p>
                        <div className="flex justify-center items-center">
                            <h1 className="font-semibold text-xl text-grass">Read More</h1>
                            <img src="/Right.svg" alt="" />
                        </div>
                    </div>
                </div>



                <div className="relative mb-12">
                    <div>
                        <img src="/image 20.svg" alt="" />
                    </div>
                    <div className="text-center bg-navbg max-w-[317px] p-6 absolute bottom-[-50px] left-6 rounded-lg ">
                        <p className="font-semibold sm:text-xl text-lg text-para">Revamping the Membership Model with Triathlon Australia</p>
                        <div className="flex justify-center items-center">
                            <h1 className="font-semibold text-xl text-grass">Read More</h1>
                            <img src="/Right.svg" alt="" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Marketing;