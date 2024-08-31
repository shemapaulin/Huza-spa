import Homepage from './components/homepage'
import About from './components/about'
import Service from './components/service'
import Testimonial from './components/testimonial'
import Contact from './components/contact'

function App() {

  return (
    <div className="h-screen">
    <Homepage />
      <About />
    <Service/>
    <Testimonial/>
    <Contact/>
      </div>
    
  )
}

export default App
