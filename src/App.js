import {Routes, Route} from "react-router-dom";

import {Footer, Layout} from "./layout";
import {ActsPage,ActPage, HomePage, LoginPage, NotFoundPage, SupportPage, ForbiddenPage} from "./pages";
import {useUser} from "./hooks";
import {PrivateRoute} from "./routes";

function App() {
    const {getUser, user, setUser} = useUser()
    return (
        <>
            <Layout user={user} getUser={getUser} setUser={setUser}>
                <Routes>
                    <Route path="/login" element={<LoginPage user={user} getUser={getUser}/>}/>
                    <Route path="/" element={<PrivateRoute user={user}><HomePage user={user}/></PrivateRoute>}/>
                    <Route path="acts" element={<PrivateRoute user={user}><ActsPage user={user}/></PrivateRoute>}/>
                    <Route path="acts/:id" element={<PrivateRoute user={user}><ActPage user={user}/></PrivateRoute>}/>
                    <Route path="*" element={<NotFoundPage user={user}/>}/>
                    <Route path="/403" element={<ForbiddenPage user={user}/>}/>
                    <Route path="/support" element={<SupportPage/>}/>
                </Routes>
            </Layout>
            <Footer/>
        </>
    )
}
export default App;