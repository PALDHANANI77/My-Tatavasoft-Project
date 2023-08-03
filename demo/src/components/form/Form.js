import './css/form.css';
import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
// // eslint-disable-next-line
import { Formik } from 'formik';

export const Form = (props) => {
  const [bookName, setBookName] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelect = (event) => {
    setSelectedOption(event.target.value);
  };

  const studentDetails = (event) => {
    setBookName(event.target.bookName.value);
    setAuthorName(event.target.authorName.value);
    navigate("/User1");
  }

  const navigate = useNavigate();
  const student = ["std1", "std2", "std3"];

  const [number, setNumber] = useState(0);
  const increment = () => {
    setNumber(number + 1);
  }
  const decrement = () => {
    setNumber(number - 1);
  }

  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Email is required").email("enter valid email"),
    password: Yup.string().required("password is required").min(5, "Password must be more than 5 characters"),
  })

  return (
    <div className='form'>
      <div><h1>Hello friends</h1></div>
      <div>
        <h3>Enter your name of book:  <input type="text" name='bookName' value={bookName} onChange={(e) => { setBookName(e.target.value) }} /></h3>
      </div>
      <div>
        <h3>Enter book author details: <input type="text" name='authorName' value={authorName} onChange={(e) => { setAuthorName(e.target.value) }} /></h3>
      </div>
      <div>
        <h3>Select student: <select value={selectedOption} onChange={handleSelect}>
          <option value="option1">{student[0]}</option>
          <option value="option2">{student[1]}</option>
          <option value="option3">{student[2]}</option>
        </select></h3>
      </div>
      <div>
        <Button variant='contained' color='primary' onClick={studentDetails}>Submit</Button>
      </div>
      <div>
        <Formik
          initialValues={{
            email: "",
            password: ""
          }}
          validationSchema={validationSchema}
          onSubmit={({email,password}) => { window.alert(`your email is ${email} ${password}`)}}
        >
          {({ values, errors, handleChange, handleSubmit }) => {
            return (
              <form onSubmit={handleSubmit}>
                <input name='email' placeholder='enter email' onChange={handleChange}  />
                <br />
                {errors.email ? errors.email : ""}
                <br />
                <input name='password' type='password' placeholder='enter password' onChange={handleChange} />
                <br />
                {errors.password ? errors.password : ""}
                <br />
                <button type='submit'>Submit</button>
              </form>
            );
          }}
        </Formik>
      </div>
      <div>
        <h1>Number : {number}</h1>
        <Button variant='contained' color='secondary' onClick={increment}>Increment</Button>
        <span> </span>
        <Button variant='contained' color='secondary' onClick={decrement}>Decrement</Button>
      </div>

      
    </div>
  );
};
