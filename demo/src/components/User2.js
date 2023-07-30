import { NavLink } from "react-router-dom";
export const User2 = (props) => {
    const b = {
        name: "rahul",
        Enroll_No: 1232,
        Department: "EC"
    };

    return (
        <div>
            <h1>hello</h1>
            <div>
            <p>Name: {b.name}</p>
            <p>Enroll No: {b.Enroll_No}</p>
            <p>Department: {b.Department}</p>
            </div>
            
            <h3>
            <nav>
                <NavLink to='/home'>home</NavLink>
            </nav>
            </h3>
            
        </div>
    );
};
