import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import Homepage from './components/Homepage'

const App: React.FC = () => {

  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<Homepage />} />
      </Routes>
    </Router>
  )
}

export default App
