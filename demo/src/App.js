import './App.css';
import React from 'react';
import { Route, Routes, NavLink } from 'react-router-dom';
import { User } from './components/User';
import User1  from './components/User1';
import User2  from './components/User2';
import { User3 } from './components/User3';
import Students from './Students';
import { Form } from './components/form/Form';
import Log1 from './Log1';

import { Profile } from './components/profile/Profiles.js';

function App() {
  var abcd = 'hello';
  var abc = 'pal';
  const student = ['std1', 'std2', 'std3'];

  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<User name={abcd} />} />
        <Route path="/" element={<User name={abc} />} />
        <Route path="/students" element={<Students />} />
        <Route path="/user1" element={<User1 />} />
        <Route path="/user2" element={<User2 />} />
        <Route path="/user3" element={<User3 />} />
        <Route path="/components" element={<Form />} />
        <Route path="/profile" element={<Profile />} />
      
      
        <Route path="/login" element={<Log1 />} />
        <Route path="/registor" element={<User2 />} />
      </Routes>

      <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
        <h2>
          <nav>
            <NavLink to="/students/*">students</NavLink>{' '}
          </nav>
        </h2>
        <h2>
          <nav>
            <NavLink to="/user1">{student[0]}</NavLink>
          </nav>
        </h2>
        <h2>
          <nav>
            <NavLink to="/user2">{student[1]}</NavLink>
          </nav>
        </h2>
        <h2>
          <nav>
            <NavLink to="/user3">{student[2]}</NavLink>
          </nav>
        </h2>
          <h1></h1>
        <h2>
          <nav>
            <NavLink to="/components">view form</NavLink>
          </nav>
        </h2>
        <h2>
          <nav>
            <NavLink to="/registor">registor form</NavLink>
          </nav>
        </h2>
        <h2>
          <nav>
            <NavLink to="/login">login form</NavLink>
          </nav>
         
        </h2>
      </div>
    </div>
  );
}

export default App;
