import * as React from 'react';
import Home from './pages/Home';
import Engineers from './pages/Engineers';
import Architectures from './pages/Architectures'
import Project from './pages/Projects'
import About from './pages/About'
import { Route, Routes } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Contact from './pages/Contact';
import team from '../src/Assets/Image/team-1.jpg'




function App() {
  const engineersData = [
    {
      name: 'John Doe',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      image: team ,
    },
    {
      name: 'Jane Smith',
      description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada...',
      image: '',
    },

  ];

  const architectureData = [
    {
      name:'nisar',
      description:'specialist construction knowledge and high-level drawing skills ',
      image:'team-1.jpg'
    },
    {
      name:'nisar',
      description:'specialist construction knowledge and high-level drawing skills ',
      image:'team-2.jpg'
    },
  ]



  return (
    <div>
      <main className='content'>
        <Navbar />
        
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/engineers' element={<Engineers engineers={engineersData} />} />
          <Route path='/architectures' element={<Architectures architectures={architectureData} />} />
          <Route path='/projects' element={<Project />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </main>



    </div>
  )
}

export default App
