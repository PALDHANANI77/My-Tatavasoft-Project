import { NavLink } from "react-router-dom";
export const User1 = (props) => {
    const b = {
        name: "Raj",
        Enroll_No: 1234,
        Department: "IT"
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
