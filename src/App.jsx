

import { BrowserRouter as Router } from "react-router-dom";
import MainRoutes from "./components/Routes.jsx";
import Footer from "./components/footer.jsx";
function App() {

  return (
    <div className="h-screen">
   <Router>
    <MainRoutes />
     <Footer/>
    </Router>
      
      </div>
    
  )
}

export default App
