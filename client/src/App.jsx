import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PostFeed from './pages/PostFeed';
import CreatePost from './pages/CreatePost';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<PostFeed />} />
        <Route path='/create-post' element={<CreatePost />} />
      </Routes>
    </Router>
  )
}

export default App
