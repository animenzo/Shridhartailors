import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Work from './pages/Work'
import Shop from './pages/Shop'
import Culture from './pages/Culture'
import News from './pages/News'
import BookAppointment from './pages/BookAppointment'
import LocomotiveScroll from 'locomotive-scroll'

const App = () => {
  const locomotiveScroll = new LocomotiveScroll()
  
  return (
    <BrowserRouter>
      <div className='w-full font-["satoshi_variable"] text-white bg-zinc-900'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/culture" element={<Culture />} />
          <Route path="/news" element={<News />} />
          <Route path="/book-appointment" element={<BookAppointment />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App