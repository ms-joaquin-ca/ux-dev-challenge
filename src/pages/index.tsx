import * as React from 'react'

const ErrorLazy = React.lazy(() => import('./error'))

const LoginLazy = React.lazy(() => import('./login'))

const HomeLazy = React.lazy(() => import('./home'))

const NotFoundLazy = React.lazy(() => import('./not-found'))

const Loader = () => <p>Loading....</p>

const Error = (
  <React.Suspense fallback={<Loader />}>
    <ErrorLazy />
  </React.Suspense>
)

const Login = (
  <React.Suspense fallback={<Loader />}>
    <LoginLazy />
  </React.Suspense>
)

const Home = (
  <React.Suspense fallback={<Loader />}>
    <HomeLazy />
  </React.Suspense>
)

const NotFound = (
  <React.Suspense fallback={<Loader />}>
    <NotFoundLazy />
  </React.Suspense>
)

export { Error, Login, Home, NotFound }
