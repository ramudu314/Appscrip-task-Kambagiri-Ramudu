import "./App.css";
import Brands from "./components/brands";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      {/* Main Content */}
      <Routes>
        {/* All components within the routes */}
        <Route path="/" element={<Brands />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
