import {Routes, Route} from "react-router-dom";

import {Footer, Layout} from "./layout";
import {
    ActsPage,
    ActPage,
    HomePage,
    LoginPage,
    NotFoundPage,
    SupportPage,
    ForbiddenPage,
    ReportingPage,
    InternalDocumentsPage,
    DeniedActsPage,
    AwardsPage
} from "./pages";
import {useUser} from "./hooks";
import {PrivateRoute} from "./routes";
import {NewActPage} from "./pages/NewActPage";
import { BackButton } from './components'

function App() {
    const {getUser, user, setUser} = useUser()
  return (<>
    <Layout user={user} getUser={getUser} setUser={setUser}>
      <BackButton user={user} />
      <Routes>
        <Route path="/login" element={<LoginPage user={user} getUser={getUser}/>}/>
        <Route path="/home" element={<PrivateRoute user={user}><HomePage user={user}/></PrivateRoute>}/>
        <Route path="/acts" element={<PrivateRoute user={user}><ActsPage user={user}/></PrivateRoute>}/>
        <Route path="/deniedActs" element={<PrivateRoute user={user}><DeniedActsPage user={user}/></PrivateRoute>}/>
        <Route path="/newAct" element={<PrivateRoute user={user}><NewActPage user={user}/></PrivateRoute>}/>}
        <Route path="/reporting" element={<PrivateRoute user={user}><ReportingPage user={user}/></PrivateRoute>}/>
        <Route path="/awards" element={<PrivateRoute user={user}><AwardsPage user={user}/></PrivateRoute>}/>
        <Route path="/internalDocuments" element={<PrivateRoute user={user}><InternalDocumentsPage user={user}/></PrivateRoute>}/>
        <Route path="/act/:actNumber" element={<ActPage user={user}/>}/>
        <Route path="/404" element={<NotFoundPage user={user}/>}/>
        <Route path="/403" element={<ForbiddenPage user={user}/>}/>
        <Route path="/support" element={<SupportPage/>}/>
      </Routes>
    </Layout>
    <Footer/>
  </>)
}export default App;