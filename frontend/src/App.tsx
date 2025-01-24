import { Route, Routes } from 'react-router-dom'
import './App.css'
import Chat from './components/Chat'
import Entry from './components/Entry'
import Join from './components/Join'

function App() {

  return (
    <>
     <Routes>
      <Route path="/chat" element={<Chat/>}></Route>
      <Route path="/" element={<Entry/>}></Route>
      <Route path="/join" element={<Join/>}></Route>
     </Routes>
    </>
  )
}

export default App
