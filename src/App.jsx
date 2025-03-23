import Navbar from './components/Navbar/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Sponsors from './pages/Sponsors'
import Footer from './components/Footer/footer'
import Error from './pages/Error'

function App() {
  return (
    <main className='relative'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          {/* <Route path="/gallery" element={<Gallery />} /> */}
          {/* <Route path="/events" element={<Events />} /> */}
          {/* <Route path="/team" element={<Team />} /> */}
          <Route path="/sponsors" element={<Sponsors />} />
          {/* <Route path="/artist" element={<Artist />} /> */}
          <Route path='*' element={<Error/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </main>
  )
}

export default App
