import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Menu } from "./components/Menu";
import { AddNewMedPage } from "./pages/AddNewMedPage";
import { EditMedPage } from "./pages/EditMedPage";
import { FilterMedLabPage } from "./pages/FilterMedLabPage";

function App() {
  return (
    <main className="app">
      <Header />
      <Menu />
      <Routes>
        <Route path="/" element={<AddNewMedPage />} />
        <Route path="/NewMed" element={<AddNewMedPage />} />
        <Route path="/EditMed" element={<EditMedPage />} />
        <Route path="/FilterMed" element={<FilterMedLabPage />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
