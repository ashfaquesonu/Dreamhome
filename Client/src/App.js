import * as React from 'react';
import Home from './pages/Home';
import Engineers from './pages/Engineers';
import Architectures from './pages/Architectures'
import Project from './pages/Projects'
import About from './pages/About'
import { Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './Component/Navbar';
import AiInterior from './pages/AI/AiInterior';
import team from '../src/Assets/Image/team-1.jpg'
import Admin from './pages/Admin';
import Builder from './Component/Builders/Builder';
import EngineerCard from '../src/Component/Builders/ConstructerCard'
import Auth from './pages/Auth';
import Users from './pages/UsersList';





function App() {
  const location = useLocation();
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

  const shouldShowNavbar = () => {
    return location.pathname !== '/auth';
  };

  return (
    <div>
      <main className='content'>

        {shouldShowNavbar() && <Navbar />}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/auth' element={<Auth />} />
          <Route path='/about' element={<About />} />
          <Route path='/engineers' element={<Engineers engineers={engineersData} />} />
          <Route path='/architectures' element={<Architectures architectures={architectureData} />} />
          <Route path='/projects' element={<Project />} />
          <Route path='/ai-interior' element={<AiInterior />} />
          <Route path='/users' element={<Users/>}/>
          <Route path='/admin' element={<Admin/>}/>
        </Routes>
      </main>



    </div>
  )
}

export default App
