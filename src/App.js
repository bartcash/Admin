import { Suspense } from "react";
import { Signup, Login, Home, ResetLogin, Product, ProductList, SingleProduct, CreateAccount, Notifications } from "./pages";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'



function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <Suspense fallback={<div>Loading...</div>}>
          <Home title='Dashboard'/>
        </Suspense>
      )
    },
    {
      path: '/admin',
      element: (
        <Suspense  fallback={<div>Loading...</div>}>
          <Login/>
        </Suspense>
      )
    },
    {
      path: '/signup',
      element: (
        <Suspense  fallback={<div>Loading...</div>}>
          <Signup/>
        </Suspense>
      )
    },
    {
      path: '/login',
      element: (
        <Suspense  fallback={<div>Loading...</div>}>
          <ResetLogin/>
        </Suspense>
      )
    },
    {
      path: '/openaccount',
      element: (
        <Suspense fallback={<div>Loading...</div>}>
          <CreateAccount/>
        </Suspense>
      )
    },
    {
      path: '/product',
      element: (
        <Suspense  fallback={<div>Loading...</div>}>
          <Product title='Product' day1 = 'Today' day2 = 'Yesterday'/>
        </Suspense>
      )
    },
    {
      path: '/product/:id',
      element: (
        <Suspense  fallback={<div>Loading...</div>}>
          <SingleProduct title='Product'/>
        </Suspense>
      )
    },
    {
      path: '/products',
      element: (
        <Suspense  fallback={<div>Loading...</div>}>
          <ProductList title='Product'/>
        </Suspense>
      )
    },
    {
      path: '/notifications',
      element: (
        <Suspense  fallback={<div>Loading...</div>}>
          <Notifications title='Notifications'/>
        </Suspense>
      )
    },
  ])

  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
