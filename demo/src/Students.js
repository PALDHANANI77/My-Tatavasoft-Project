import { NavLink, Routes,Route } from 'react-router-dom';
import User1 from "./components/User1"
import User2 from "./components/User2"
import {User3} from "./components/User3"
function Students() {
  const student = ["std1", "std2", "std3"];

  return (
    <div className="App">
      <Routes>
      <Route path='/user1/*' element={<User1 />} />
      <Route path='/user2/*' element={<User2 />} />
      <Route path='/user3/*' element={<User3 />} />
      </Routes>
      <div style={{ display: "flex", gap: "20px", justifyContent: "center" }}>
        <h2><nav><NavLink to='/user1/*'>{student[0]}</NavLink></nav></h2>
        <h2><nav><NavLink to='/user2/*'>{student[1]}</NavLink></nav></h2>
        <h2><nav><NavLink to='/user3/*'>{student[2]}</NavLink></nav></h2>
      </div>
      <h3>
        <nav>
          <NavLink to='/home'>home</NavLink>
        </nav>
      </h3>
    </div>
  );
}

export default Students;
