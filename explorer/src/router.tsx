import { lazy, Suspense } from 'react'

import { 
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import {Navbar} from './components/navbar'
import PageLoader from './components/loaders/PageLoader'
import {WalletPage} from './pages/wallet'

const Home = lazy(() => import('./pages'))

export default function MainRouter() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <Suspense fallback={<PageLoader />}>
              <Home />
            </Suspense>
          } />
          <Route path="/wallet" element={<WalletPage />} />
          <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </BrowserRouter>
  )
}
