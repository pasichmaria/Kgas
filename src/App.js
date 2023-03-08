import { Routes, Route } from "react-router-dom";
import { useUser } from "./hooks/useUser";
import { Footer, Layout } from "./layout";

import { Dashboard, Home, Login, PageNotFound, Support } from "./pages";

function App() {
  const { getUser, user, setUser } = useUser();
  return (
    <>
      <Layout user={user} getUser={getUser} setUser={setUser}>
        <Routes>
          <Route
            exact
            path="/"
            element={<Login getUser={getUser} user={user} />}
          />
          {user ? (
            <>
              <Route exact path="/home" element={<Home />} />
              <Route path="/support" element={<Support />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </>
          ) : null}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Layout>
      <Footer />
    </>
  );
}
export default App;
