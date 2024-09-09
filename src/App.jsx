import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoutes from './utils/PrivateRoutes'



import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import { AuthProvider } from './utils/AuthContext'
import Room from './pages/Room'



function App() {


  return (
    
      <Router>
        
        <AuthProvider>
          
          <Routes>
              <Route path="/login" element={<LoginPage/>}/>
              <Route path="/register" element={<RegisterPage/>}/>
                <Route element={<PrivateRoutes/>}>
                    <Route path="/" element={<Room/>}/>
                </Route>
          </Routes>
          <ToastContainer/>
        </AuthProvider>
      </Router>
    
  )
}

export default App