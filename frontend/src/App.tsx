import { Route, Routes } from 'react-router-dom'
import './App.css'
import Chat from './components/Chat'
import Entry from './components/Entry'
import Join from './components/Join'
import WebSocketProvider from './components/WebSocketProvider'

function App() {

  return (
    <WebSocketProvider>
     <Routes>
      <Route path="/chat" element={<Chat/>}></Route>
      <Route path="/" element={<Entry/>}></Route>
      <Route path="/join" element={<Join/>}></Route>
     </Routes>
    </WebSocketProvider>
  )
}

export default App
