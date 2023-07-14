import { Suspense } from "react";
import { Signup, Login, Home, ResetLogin, Product, CreateAccount } from "./pages";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'



function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <Suspense fallback={<div>Loading...</div>}>
          <Home/>
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
          <Product/>
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
