import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import Homepage from './pages/Homepage'
import Category from './pages/Category'
import PetDetail from './pages/PetDetail'

const App: React.FC = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/category" element={<Category />} />
        <Route path="/pets/:id" element={<PetDetail />} />
      </Routes>
    </Router>
  )
}

export default App
