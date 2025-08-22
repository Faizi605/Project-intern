import { logoClient } from "@constants"
function Client() {
    return (
        <div className="py-6">
            <div className="text-center mb-3">
                <h1 className="text-herogray md:text-4xl text-2xl font-semibold">Our Clients</h1>
                <p className="text-para mt-2">We have been working with some Fortune 500+ clients</p>
            </div>
            <div className="hidden md:flex  items-center py-6  justify-evenly">
                {
                    logoClient.map((logo, index) => (
                        <img src={logo} className="" key={index} alt="" />
                    ))
                }

            </div>
            <div className="md:hidden flex justify-center items-center">
                <h1 className=" text-xl font-semibold text-grass">Meet all customers</h1>
                <img src="Right.svg" alt="" />
            </div>
        </div>
    )
}
export default Client;