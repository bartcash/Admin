import "./signup.css"
import { fbsignup, bartcashlogo } from '../../constants/images'
import { Link } from "react-router-dom"
import { useFormik } from "formik"
import { validationSchema } from "../../utils/loginSchema"

const SignUp = () => {

    const onSubmit = async (actions, values) => {
          await new Promise((resolve)=>setTimeout(resolve, 500))
            actions.resetForm()
          
    }

    const { handleChange, handleBlur,  isSubmitting,  errors, touched, values, handleSubmit } = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: validationSchema,
        onSubmit
    })

    console.log(values)

  return (
    <main className='signup'>
        <form className='signup__input-form' autoComplete="off" onSubmit={handleSubmit}>
            <img src={bartcashlogo} alt="" height={40} width={100}/>
            <h2>Sign Up</h2>

            <section className="signup__input-label">

                <label htmlFor='email'>Email </label>
                 <input 
                 value={values.email}
                 onChange={handleChange}
                 type='email' 
                 id="email"
                 placeholder='Enter Email' 
                 onBlur={handleBlur}
                 className={errors.email && touched.email ? 'signup__errors': "signup__input"}

                 />
                 {errors.email && touched.email  && <p className="signup__errors-msg">{errors.email}</p>}
            </section>
            
 
            <section className="signup__input-label">

                <label htmlFor='password'> Password </label>
                <input 
                value={values.password}
                onChange={handleChange}
                type='password' 
                id="password"
                placeholder='Enter Password' 
                onBlur={handleBlur}
                className={errors.password && touched.password ? 'signup__errors': "signup__input"}
                
                />
                 {errors.password && touched.password && <p className="signup__errors-msg">{errors.password}</p>}
            </section>
            <button className='signup__btn' type="submit" disabled={isSubmitting} >Sign Up</button>
            <span>Already have an account? <Link to='/admin' className='link'>Login</Link></span>
            <p>OR</p>
            <img src={fbsignup} alt="Social Signup"  height={30} width={50}/>
        </form>
    </main>
  )
}

export default SignUp
