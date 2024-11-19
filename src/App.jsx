import { useState } from 'react' 
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/auth/Login'
import Signup from './pages/auth/Signup'
import Dashboard from './pages/Dashboard'
import ProtectedRoutes from './services/ProtectedRoutes'
import MovieDetail from './pages/MovieDetail'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'
import MainLayout from './layout/MainLayout' 
import SearchPage from './pages/SearchPage'
import MovieProviders from './pages/MovieProviders'
import TVSeries from './pages/TVSeries'


function App() { 

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainLayout />}>

            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/movie-detail' element={<MovieDetail />} />
            <Route path='/search' element={<SearchPage />} />
            <Route path='/movie-providers' element={<MovieProviders />} />
            <Route path='/tv-series' element={<TVSeries />} />
          </Route>
          {/* protected routes */}
          <Route path='/' element={<ProtectedRoutes />}>
            <Route path='/dashboard' element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  )
}

export default App
