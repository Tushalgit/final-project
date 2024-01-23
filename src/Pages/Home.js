import Hero from "../Component/Hero"
import Services from "../Component/Services"
import heroimg from "../assets/images/heroimage.jfif"

function Home() {
  return (
    <>
      <Hero name="TrendBazaar" img={heroimg} />
      <Services />
    </>
  )
}
export default Home