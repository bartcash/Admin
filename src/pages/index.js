import { lazy } from "react";

const Login = lazy(()=> import('./login/Login'))
const Signup = lazy(() => import('./signup/SignUp'))
const ResetLogin = lazy(()=> import('./resetlogin/ResetLogin'))
const CreateAccount = lazy(()=> import('./createAcct/CreateAccount'))
const Home = lazy(()=> import('./home/Home'))
const Product = lazy(()=> import('./product/Product'))


export {
    Login,
    Signup,
    CreateAccount,
    Home,
    Product,
    ResetLogin
}