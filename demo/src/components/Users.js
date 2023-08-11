// import {NavLink } from "react-router-dom";
import { Button } from "@material-ui/core";
export const User = (props)=>{
    return (
        <div>
        <h1>hello friends {props.name}</h1>
        {/* <nav> */}
            {/* <NavLink to='/students'> */}
            <Button variant="contained" color="primary">hello</Button>
            {/* </NavLink> */}
        {/* </nav> */}
        
        </div>
    )
};

