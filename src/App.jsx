import Homepage from './components/homepage'
import About from './components/about'
import Service from './components/service'
import Testimonial from './components/testimonial'
import Contact from './components/contact'
import Footer from './components/footer'

function App() {

  return (
    <div className="h-screen">
    <Homepage />
      <About />
    <Service/>
    <Testimonial/>
    <Contact/>
    <Footer/>
      </div>
    
  )
}

export default App
