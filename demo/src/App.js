import './App.css';
import { BrowserRouter, Route, Routes, NavLink} from 'react-router-dom';
import { User } from './components/User';
import { User1 } from './components/User1';
import { User2 } from './components/User2';
import { User3 } from './components/User3';


function App() {
  var abcd = "hello";       
  var abc = "pal";
  const student = ["std1", "std2", "std3"];

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>x``
          <Route path='/home' element={<User name={abcd} />} /> {/* Correctly define the Route */}
          <Route path='/' element={<User name={abc} />} />
          <Route path='/user1' element={<User1 />} /> {/* New Route for User1 */}
          <Route path='/user2' element={<User2 />} /> {/* New Route for User2 */}
          <Route path='/user3' element={<User3 />} /> {/* New Route for User3` */}
        </Routes>
        <div style={{display: "flex", gap: "20px", justifyContent:"center"}}>
          <h2><nav><NavLink to='/user1'>{student[0]}</NavLink> </nav></h2>
          <h2><nav><NavLink to='/user2'>{student[1]}</NavLink> </nav></h2>
          <h2><nav><NavLink to='/user3'>{student[2]}</NavLink> </nav></h2>
        </div>
      </BrowserRouter>

    </div>
  );
}

export default App;
