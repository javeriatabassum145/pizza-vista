import React,{useState,useEffect} from "react";
import {useSelector,useDispatch} from 'react-redux'
import {loginUser} from '../actions/userAction'


const Login = () => {

  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const dispatch = useDispatch()

  useEffect(() => {
    if(localStorage.getItem('currentUser')){
      // window.location.href = '/'
    }
  }, [])
  const loginHandler = () => {
    const user = {email, password}
    dispatch(loginUser(user))
  }
  return (
    <>
      <div className="container">
        <div className="row d-flex justify-content-center mt-5 pt-5">
          <div className="col-lg-6" data-aos="fade-right" data-aos-delay="200">
              <header className="section-header text-center pb-4">
                <h2>Login</h2>
              </header>

              <form className="mb-5" id="contactForm" name="contactForm">

                <div className="row my-3">
                  <div className="col-md-12 form-group">
                    <label for="email" className="col-form-label">
                      Email
                    </label>
                    <input
                      type="text"
                      value={email}
                      onChange={(e => setEmail(e.target.value))}
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="Your email address"
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
                      value={password}
                      onChange={(e => setPassword(e.target.value))}
                      className="form-control"
                      name="password"
                      id="password"
                      placeholder="Your password"
                    />
                  </div>
                </div>
                <div className="row my-3">
                  <div className="col-md-12">
                    <input
                      onClick={loginHandler}
                      value="Login"
                      className="btn btn-block my-3 color-orange text-light"
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

export default Login;
