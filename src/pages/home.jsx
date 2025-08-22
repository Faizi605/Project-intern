import {Navbar,Pixel,Bussines,Footer,SiteFooter,Customers,Marketing,Hero,Client,Community} from "@sections"
// import {Hero} from "@sections"
// import {Client} from "@sections"
// import {Community} from "@sections"



function Home  () {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Client/>
        <Community/>
        <Pixel/>
        <Bussines/>
        <SiteFooter/>
        <Customers/>
        <Marketing/>
        <Footer/>
    </div>
  )
}

export default Home