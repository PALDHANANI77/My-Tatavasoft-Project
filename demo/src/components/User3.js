
import { NavLink } from "react-router-dom";export const User3 = (props) => {
    const b = {
        name: "jay",
        Enroll_No: 1231,
        Department: "CE"
    };

    return (
        <div>
            <h1>hello</h1>
            <p>Name: {b.name}</p>
            <p>Enroll No: {b.Enroll_No}</p>
            <p>Department: {b.Department}</p>
            <h3>
            <nav>
                <NavLink to='/home'>home</NavLink>
            </nav>
            </h3>
        </div>
    );
};






// import { Route, Routes, NavLink } from 'react-router-dom';
// import { User1 } from './User1';
// import { User2 } from './User2';
// import { User3 } from './User3';

// function Students() {
//   const student = ["std1", "std2", "std3"];

//   return (
//     <div className="App">
//       <Routes>
//         <Route path='/user1' element={<User1 />} />
//         <Route path='/user2' element={<User2 />} />
//         <Route path='/user3' element={<User3 />} />
       
//       </Routes>
//       <div style={{ display: "flex", gap: "20px", justifyContent: "center" }}>
//         <h2><nav><NavLink to='/user1'>{student[0]}</NavLink></nav></h2>
//         <h2><nav><NavLink to='/user2'>{student[1]}</NavLink></nav></h2>
//         <h2><nav><NavLink to='/user3'>{student[2]}</NavLink></nav></h2>
//       </div>
//       <h3>
//         <nav>
//           <NavLink to='/home'>home</NavLink>
//         </nav>
//       </h3>
//     </div>
//   );
// }

// export default Students;



// import './App.css';
// import { BrowserRouter, Route, Routes, NavLink} from 'react-router-dom';
// import { User } from './User';

// import Students from './Students';


// function App() {
//   const abcd = "hello";
//   const abc = "pal";
//   return (
//     <div className="App">
//       <BrowserRouter>
//         <Routes>
//           <Route path='/home' element={<User name={abcd} />} /> {/* Correctly define the Route */}
//           <Route path='/' element={<User name={abc} />} />
//           <Route path='/Students' element={<Students />} /> {/* New Route for User1 */}
//         </Routes>
//         <nav>
//           <NavLink to='/Students'>student</NavLink>
//         </nav>
//       </BrowserRouter>
        
//     </div>
//   );
// }

// export default App;
