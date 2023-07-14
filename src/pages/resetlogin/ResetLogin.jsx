import './resetlogin.css'
import { bartcashlogo } from '../../constants/images'
import { useState } from 'react'

const ResetLogin = () => {

  const [values, setValues] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  })

  const handleChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value})
  }


  const handleSubmit = async (e) => {
    e.preventDefault()
  }

  return (
    <main className='resetpassword'> 
     <form className='resetlogin__input-form'>
     <img src={bartcashlogo} alt="BartCash" height={40} width={100}/>
        <h2>Login</h2>

        <section className='resetlogin__input-section'>

        <label htmlFor='email'> Email </label>
            <input 
              type='email' 
              name='email' 
              value={values.email} 
              placeholder='Enter Email'  
              className='signup__input'
              onChange={handleChange}

            />
        </section>

      <section className='resetlogin__input-section'>

        <label htmlFor='password'> New Password  </label>
            <input 
              type='password' 
              name='password' 
              value={values.password} 
              placeholder='Enter new password' 
              className='signup__input'
              onChange={handleChange}
            />
      </section>

        <section className='resetlogin__input-section'>

        <label htmlFor='confirmPassword'> Confirm Password </label>
            <input 
              type='password' 
              name='confirmPassword' 
              value={values.confirmPassword} 
              placeholder='Confirm new password '  
              className='signup__input'
              onChange={handleChange}
            />
        </section>

        <button className='signup__btn' onClick={handleSubmit}>Login</button>
     </form>
    </main>
  )
}

export default ResetLogin
