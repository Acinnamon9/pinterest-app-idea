import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer"

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar/>
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About/>
      


      {/* Contact Section */}
      <Contact/>

      {/* Footer */}
      <Footer/>
    </main>
  )
}
