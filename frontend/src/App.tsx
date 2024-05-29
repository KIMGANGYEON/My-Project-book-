import { Outlet, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";

function Layout() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100vh",
      }}
    >
      <Navbar />
      <main style={{ marginBottom: "auto", padding: "0 100px" }}>
        <Outlet />
      </main>
      {/* <Footer /> */}
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<LandingPage />} />

        <Route path="/login" element={<LoginPage />} />
        <Route path="/join" element={<RegisterPage />} />
      </Route>
    </Routes>
  );
}

export default App;
