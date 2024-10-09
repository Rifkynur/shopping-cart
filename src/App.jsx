import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <main className="flex flex-col min-h-screen bg-secondary font-Poppins text-gray-300">
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
}

export default App;
