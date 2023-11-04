// import React, { Suspense } from 'react'

// // import Loading from './comonents/Loading'

// // const Home = React.lazy(() => import('./views/Home'))

// export default function App() {
//   return (
//     <><div>dd</div></>
//   )

// // export default App

import React, { Suspense } from 'react'

import Loading from './comonents/Loading'

const Home = React.lazy(() => import('./views/Home'))
const Profile = React.lazy(() => import('./views/Profile'))
const SignUp = React.lazy(() => import('./views/SignUp'))

export default function App() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Home />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <Profile />
      </Suspense>
    <Suspense fallback={<Loading />}>
      <SignUp />
    </Suspense>
    </>
  )
}
