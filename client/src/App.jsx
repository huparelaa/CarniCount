import './index.css'
import {Routes,Route} from 'react-router-dom'
import Dashboard from './components/dashboard/Dashboard'
import Home from './components/home/Home'
import NotFound from './components/notFound/NotFound'
import Signup from './components/signup/Signup'
import Login from './components/Login/Login'
function App() {

  return (
    <Routes>
      <Route path='/' element={<Home/>}/> 
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
  )
}

export default App
