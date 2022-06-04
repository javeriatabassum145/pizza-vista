import React, {useState} from "react";
import {useSelector,useDispatch} from 'react-redux'
import {registerUser} from '../actions/userAction'
import Success from "./Success";
import Error from "./Error"


const Register = () => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState('');
const registerState = useSelector(state => state.registerUserReducer)
const {error, success, loading} = registerState

    const dispatch =useDispatch()

    const registerHandler = () => {
        const user = {name, number, email, password }
        dispatch(registerUser(user))
        setName(''); setNumber(''); setEmail(''); setPassword('')
    }
  return (
    <>
       <div className="container">

        <div className="row d-flex justify-content-center mt-5 pt-5">
          <div className="col-lg-6" data-aos="fade-right" data-aos-delay="200">
          {success && <Success success={"User Register Successfully"}/>}

        {error && <Error error="Something went wrong"/>}
        
              <header className="section-header text-center pb-4">
                <h2>Register Now</h2>
              </header>

              <form className="" id="contactForm" name="contactForm">
              <div className="row">
          <div className="col-md-6 form-group">
            <label for="name" className="col-form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control name"
              name="name"
              id="name"
              placeholder="Your name"
              value = {name}
              onChange={e => setName(e.target.value)}
            />
          </div>
          <div className="col-md-6 form-group">
            <label for="name" className="col-form-label">
              Mobile Number
            </label>
            <input
              type="text"
              className="form-control"
              name="number"
              id="number"
              placeholder="Your number"
              value={number}
              onChange={e => setNumber(e.target.value)}
            />
          </div>
        </div>
                <div className="row my-3">
                  <div className="col-md-12 form-group">
                    <label for="email" className="col-form-label">
                      Email
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="Your email address"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                    />
                  </div>
                </div>

                <div className="row my-3">
                  <div className="col-md-12 form-group">
                    <label for="email" className="col-form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      id="password"
                      placeholder="Your password"
                      value={password}  
                      onChange={e => setPassword(e.target.value)}
                    />
                  </div>
                </div>
                <div className="row my-3">
                  <div className="col-md-12">
                    <input
                    onClick={registerHandler}
                      value="Register"
                      className="btn btn-block my-2 color-orange text-light"
                    />
                  </div>
                </div>
              </form>
          </div>
        </div>
      </div>

      </>
  );
};

export default Register;
