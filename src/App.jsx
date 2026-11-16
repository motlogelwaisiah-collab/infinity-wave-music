import { Routes, Route, Navigate } from 'react-router-dom'
import { Navbar, Footer } from './components/Shell'
import { Home, Music, Videos, About, Artist, News, Contact } from './pages/Pages'
export default function App() {
  return <><Navbar /><main><Routes>
    <Route path="/" element={<Home />} /><Route path="/music" element={<Music />} /><Route path="/videos" element={<Videos />} />
    <Route path="/about" element={<About />} /><Route path="/artist" element={<Artist />} /><Route path="/news" element={<News />} />
    <Route path="/contact" element={<Contact />} /><Route path="*" element={<Navigate to="/" replace />} /></Routes></main><Footer /></>
}
