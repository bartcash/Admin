import './login.css'
import { fbsignup, bartcashlogo } from '../../constants/images'
import { Link } from "react-router-dom"
import { useRef } from 'react'

const Login = () => {
  const emailRef = useRef()
  const passwordRef = useRef()

  return (
    <main className='login'>
      <form className='login__input-form'>
      <img src={bartcashlogo} alt="" height={40} width={100}/>
            <h2>Login</h2>

          <section className="login__input-label">

            <label htmlFor='email'> Email  </label>
            <input 
              type='email' 
              id='email' 
              ref={emailRef} 
              placeholder='Enter Email' 
              className="login__input"
            />
          </section>

            <section className="login__input-label">

              <label htmlFor='password'> Password </label>
              <input 
                type='password' 
                id='password' 
                ref={passwordRef} 
                placeholder='Enter Password' 
                className="login__input"
              />
              <span className='login__resetpassword'>Forget Password?</span>
            </section>

            <button className='login__btn'>Login</button>
            <span>Do not have an account? <Link to='/signup' className='link'>Sign up</Link></span>
            <p>OR</p>
            <img src={fbsignup} alt="Social Signup" height={30} width={50}/>
      </form>
    </main>
  )
}

export default Login


//  /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/