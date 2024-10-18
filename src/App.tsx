import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import Homepage from './pages/Homepage'
import Category from './pages/Category'

const App: React.FC = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/category" element={<Category />} />
      </Routes>
    </Router>
  )
}

export default App
