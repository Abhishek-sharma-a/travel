import React from 'react'
import Banner from './Banner'
import Heading from './Heading'
import bg from "../assets/images/bg.40066edd.png"
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react'
import axios from "axios"


const Signup = () => {

    const navegate = useNavigate()
    const token = localStorage.getItem("token")
    useEffect(() => {
        if (token) {
            navegate("/dashboard")
        }

    }, [])


    const [submit, setSubmit] = useState(false)
    
const initialSignup = {
    "email": "",
    "fname": "",
    "lname": "",
    "pass": "",
    "dob": ""
}
const [signup, setSignup] = useState(initialSignup)
const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setSignup(signup => ({ ...signup, [name]: value }))
}
const handlesubmit = (e) => {
    // e.preventDefault();
    setSubmit(true);
    createPost();
}
const [post, setPost] = useState(null);
const baseURL = "http://localhost:4000/";

function createPost() {
    axios.post(baseURL+'signup', signup).then((res) => {
         localStorage.setItem("token", res.data.accessToken);
    localStorage.setItem("user", JSON.stringify(res.data.user))
    console.log(token);
    navegate("/dashboard")
    setPost();});
}

  return (
    <div>
         <Banner h1={"Sign up Page"} h2={""} imgPath={bg} />
      <Heading heading={"sign up"}/>
      <div className="container col-lg-6 col-md-3 col-sm-3">
      <Form.Floating className="mb-3">
                <Form.Control
                    name="email"
                    type="email"
                    placeholder="name@example.com"
                    onChange={handleInput}

                />
                <label>Email address</label>
            </Form.Floating>
            <Form.Floating className="mb-3">
                <Form.Control
                    name="fname"
                    type="text"
                    placeholder="First Name"
                    onChange={handleInput}
                    required
                />
                <label>First Name</label>
            </Form.Floating>

            <Form.Floating className="mb-3">
                <Form.Control
                    name="lname"
                    type="text"
                    placeholder="Lirst Name"
                    required
                    onChange={handleInput}
                />
                <label>Last Name</label>
            </Form.Floating>
            <Form.Floating className="mb-3">
                <Form.Control
                    name="pass"
                    type="password"
                    placeholder="Password"
                    required
                    onChange={handleInput}
                />
                <label>Password</label>
            </Form.Floating>
            <Form.Floating className="mb-3">
                <Form.Control
                    name="dob"
                    type="date"
                    placeholder="Date-of-birth"
                    required
                    onChange={handleInput}
                />
                <label>Date-of-birth</label>
            </Form.Floating>
            <button onClick={() => { handlesubmit() }} className="btn btn-primary" type="submit" style={{ backgroundColor: "#8b3eea" }}>Register</button>
      </div>
    </div>
  )
}

export default Signup