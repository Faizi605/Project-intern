import { logoClient } from "@constants/logo"
function Customers() {
    return (
        <div className=" lg:flex justify-center items-center gap-8 bg-navbg py-8 px-6">
            <div className="grid  place-content-center">
                <img src="/image 9.svg" alt="" />
            </div>
            <div>
                <div className="lg:w-secondbox w-auto">
                    <p className="lg:text-[16px] md:text-[14px] text-[12px] text-para font-medium">Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</p>
                    <h1 className="text-grass lg:text-[20px] text-[16px] md:my-3 my-1.5 font-semibold">Tim Smith</h1>
                    <p className="text-para">British Dragon Boat Racing Association</p>
                    <div className="flex  items-center py-6  md:justify-evenly">
                        {
                            logoClient.map((logo, i) => (
                                
                                    <img src={logo} className="hidden lg:flex" key={i} alt="" />

                                

                            ))
                        }
                        <div className="flex"> 
                            <h1 className="text-xl font-semibold text-grass">Meet all customers</h1>
                            <img src="Right.svg" alt="" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Customers;