import { Route, Routes } from 'react-router-dom'
import {
  ActPage,
  ActsPage,
  AwardsPage,
  DeniedActsPage,
  ForbiddenPage,
  InternalDocumentsPage,
  LoginPage,
  NewActPage,
  NotFoundPage,
  ReportingPage, ActPageAdd,
  SupportPage, InternalServerErrorPage
} from './pages'
import { useUser } from './hooks'
import { PrivateRoute } from './routes'
import { Layout } from './layout'
import React from 'react'
import { LaboratoryActPage, LaboratoryEditActPage } from './pages'

function App() {
  const { getUser, user, setUser  } = useUser()

  return (
    <>
      <Layout user={user} getUser={getUser} setUser={setUser}>
        <Routes>
          <Route path='/' exact element={<LoginPage user={user} getUser={getUser} />} />
          <Route path='/login' exact element={<LoginPage user={user} getUser={getUser} />} />
          <Route path='/acts' element={<PrivateRoute user={user}><ActsPage user={user} /></PrivateRoute>} />
          <Route path='/act/:id' element={<PrivateRoute user={user}><ActPage user={user} /></PrivateRoute>} />
          <Route path='/act/edit' element={<PrivateRoute user={user}><ActPageAdd  user={user} /></PrivateRoute>} />

          <Route path='/act/laboratory/edit' element={<PrivateRoute user={user}><LaboratoryEditActPage  user={user} /></PrivateRoute>} />
          <Route path='/act/laboratory' element={<PrivateRoute user={user}><LaboratoryActPage user={user} /> </PrivateRoute>} />


          <Route path='/deniedActs' element={<PrivateRoute user={user}><DeniedActsPage user={user} /></PrivateRoute>} />
          <Route path='/newAct' element={<PrivateRoute user={user}><NewActPage user={user} /></PrivateRoute>} />}
          <Route path='/reporting' element={<PrivateRoute user={user}><ReportingPage user={user} /></PrivateRoute>} />
          <Route path='/awards' element={<PrivateRoute user={user}><AwardsPage user={user} /></PrivateRoute>} />

          <Route path='/internalDocuments' element={<PrivateRoute user={user}><InternalDocumentsPage user={user} /></PrivateRoute>} />
          <Route path='*' element={<NotFoundPage />} />
          <Route path='/404' element={<NotFoundPage />} />
          <Route path='/500' element={<InternalServerErrorPage />} />
          <Route path='/403' element={<ForbiddenPage />} />
          <Route path='/support' element={<SupportPage user={user} />} />
        </Routes>
      </Layout>
    </>
  )
}

export default App