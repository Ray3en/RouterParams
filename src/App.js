import About from "./components/About";
import Header from "./components/Header";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import PostList from "./components/PostList";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Post from "./components/Post";


function App() {
  return (
    <div >
      <Header/>
      <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/posts" element={<PostList/>}/>
          <Route path="/posts/:id" element={<Post/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </Router>
      </div>
    </div>
  );
}

export default App;
