import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Footer } from "./components/Footer";
import { HomePage } from "./pages/HomePage";
import { AddNewMedPage } from "./pages/AddNewMedPage";
import { DeleteMedPage } from "./pages/DeleteMedPage";

function App() {
  return (
    <main className="app">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/NewMed" element={<AddNewMedPage />} />
        <Route path="/NewMed" element={<DeleteMedPage />} />
        <Footer />
      </Routes>
    </main>
  );
}

export default App;
