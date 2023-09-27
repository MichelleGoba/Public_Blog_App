
import './App.css'
import Home from './pages/Home';
import Login from './pages/Login';
import CreatePost from './pages/CreatePost';
import Learn from './pages/Learn';
import MeetUps from './pages/MeetUps';
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // to create different pages 
import { useState } from 'react';


function App() {
  // to determine if the user is authenticated or not
 
  const [isAuth, setIsAuth] = useState(false);  // pass in as props in login component
  return (
    // define the structure of routes
    <Router>
      {/* navbar will exist about the routes components, it will continue in every single page */}
      <nav>
        <Link to='/logo'>Cape Town Devs</Link>
        <Link to='/'>Home</Link>
        <Link to='/createpost'>Create Post</Link>
        <Link to='/learn'>Learn</Link>
        <Link to='/meetup'>Meet Ups</Link>
        <Link to='/login'>Log in</Link>
        
      </nav>

      <Routes>
        {/* route render these components */}
        <Route path='/' element={<Home/>} />
        <Route path='/createpost' element={<CreatePost/>} />
        <Route path='/learn' element={<Learn/>} />
        <Route path='/meetup' element={<MeetUps/>} />
        <Route path='/login' element={<Login setIsAuth={setIsAuth} />} />
      </Routes>
    </Router>
    
      
  )
}

export default App
