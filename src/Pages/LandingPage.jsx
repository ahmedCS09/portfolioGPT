import Navbar from "../Components/Navbar"
import Landing from "../Components/Landing"
import Footer from "../Components/Footer"
import { useEffect } from "react"

let LandingPage = () => {

    useEffect(() => {
    setTimeout(() => window.scrollTo(0, 0), 10) // Reset scroll on page load
  }, [])

    return (
        <>
            <Navbar />
            <Landing />
            <Footer />
        </>
    )
}

export default LandingPage