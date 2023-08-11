import "./Log.css";
import React from "react";
import { User } from "./components/User";
import { LoginForm } from "./components/LoginForm";
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { Profile } from "./components/profile/Profiles.js";
import { ThemeProvider, createTheme } from "@material-ui/core";

const theme = createTheme({
  palette: {
    primary: {
      main: "#d32f2f",
    },
    secondary: {
      main: "#d24f2f",
    },
    shadows: ["none", "1px 1px gray"],
  },
});

function Log1() {
  const username = "pal";
  const array = [1, 2, 3, 4, 5, 6, 7, 8];
  let filteredArray = array.filter((item) => item !== 6);
  console.log("array", filteredArray);
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        HELLO!
        <br></br>
        <br />
        <Routes>
          <Route path="/" element={<Home name={username} />} />
          <Route path="/user" element={<User />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/loginform" element={<LoginForm />} />
        </Routes>
     
      </div>
    </ThemeProvider>
  );
}

export default Log1;
