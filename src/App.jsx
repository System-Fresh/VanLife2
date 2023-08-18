import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import '../server'
import './index.css'
import Home from './pages/Home'
import About from './pages/About'
import Vans from './vans/Vans'
import VansDetail from './vans/VansDetail'
import Host from './components/Host'
import Dashboard from './host/Dashboard'
import Income from './host/Income'
import Reviews from './host/Reviews'
import Layout from './components/Layout'
import HostVans from './host/HostVans'
import HostVansDetail from './host/HostVansDetail'
import HostVansDetailDetails from './host/HostVansDetailDetails'
import HostVansDetailPricing from './host/HostVansDetailPricing'
import HostVansDetailPhoto from './host/HostVansDetailPhoto'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      
      
      <Route path='/vans' element={<Vans />} />
      <Route path='/vans/:id' element={<VansDetail />} />

      

      <Route path='host' element={<Host />} >
        
      <Route path='host' element={<Dashboard />} />
      <Route path='income' element={<Income />} />
      <Route path='reviews' element={<Reviews />} />
      <Route path='hostVans' element={<HostVans />} />

      <Route path='hostVans/:id' element={<HostVansDetail />} >
      <Route index element={<HostVansDetailDetails />} />
      <Route path='detailsPricing' element={<HostVansDetailPricing />} />
      <Route path='detailsPhoto' element={<HostVansDetailPhoto />} />


      </Route>
      </Route>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
