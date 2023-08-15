import { lazy } from "react";

const Login = lazy(()=> import('./login/Login'))
const Signup = lazy(() => import('./signup/SignUp'))
const ResetLogin = lazy(()=> import('./resetlogin/ResetLogin'))
const CreateAccount = lazy(()=> import('./createAcct/CreateAccount'))
const Home = lazy(()=> import('./home/Home'))
const Product = lazy(()=> import('./product/Product'))
const ProductList = lazy(()=> import('./productList/ProductList'))
const SingleProduct = lazy(()=> import('./singleProduct/SingleProduct'))
const Notifications = lazy(()=> import('./notifications/Notifications'))
const Owner = lazy(()=> import('./owner/Owner'))



export {
    Login,
    Signup,
    CreateAccount,
    Home,
    Product,
    ResetLogin,
    ProductList,
    SingleProduct,
    Notifications,
    Owner
}
