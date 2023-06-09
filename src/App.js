import { Route, Routes } from 'react-router-dom'

import { Footer, Layout } from './layout'
import {
  ActPage,
  ActsPage,
  AwardsPage,
  DeniedActsPage,
  ForbiddenPage,
  HomePage,
  InternalDocumentsPage,
  LoginPage,
  NewActPage,
  NotFoundPage,
  ReportingPage,
  SupportPage
} from './pages'
import { useUser } from './hooks'
import { PrivateRoute } from './routes'

function App() {
  const { getUser, user, setUser , loading } = useUser()
  return (
     !loading ? (
    <>
      <Layout user={user} getUser={getUser} setUser={setUser}>
        <Routes>
          <Route path='/' exact element={<LoginPage user={user} getUser={getUser} />} />
          <Route path='/login' exact element={<LoginPage user={user} getUser={getUser} />} />
          <Route path='/home' element={<PrivateRoute user={user}><HomePage user={user} /></PrivateRoute>} />
          <Route path='/acts' element={<PrivateRoute user={user}><ActsPage user={user} /></PrivateRoute>} />
          <Route path='/act/:act_number' element={<PrivateRoute user={user}><ActPage user={user} /></PrivateRoute>} />
          <Route path='/deniedActs' element={<PrivateRoute user={user}><DeniedActsPage user={user} /></PrivateRoute>} />
          <Route path='/newAct' element={<PrivateRoute token={user}><NewActPage user={user} /></PrivateRoute>} />}
          <Route path='/reporting' element={<PrivateRoute user={user}><ReportingPage user={user} /></PrivateRoute>} />
          <Route path='/awards' element={<PrivateRoute user={user}><AwardsPage user={user} /></PrivateRoute>} />
          <Route path='/internalDocuments' element={<PrivateRoute user={user}><InternalDocumentsPage user={user} /></PrivateRoute>} />
          <Route path='*' element={<NotFoundPage />} />
          <Route path='/403' element={<ForbiddenPage />} />
          <Route path='/support' element={<SupportPage user={user} />} />
        </Routes>
        <Footer user={user} />
      </Layout>
  </>) : null
  )
}

export default App