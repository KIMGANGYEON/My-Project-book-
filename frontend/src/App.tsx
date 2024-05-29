import { Outlet, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
      <ToastContainer
        position="bottom-right"
        theme="light"
        pauseOnHover
        autoClose={1500}
      />
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
        <Route path="/register" element={<RegisterPage />} />
      </Route>
    </Routes>
  );
}

export default App;
