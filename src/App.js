import './App.css'
import { HomeScreen, ListScreen } from 'screens'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />}></Route>
        <Route path="/List" element={<ListScreen />}></Route>
      </Routes>
    </Router>
  )
}

export default App
