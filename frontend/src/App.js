import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Menu } from "./components/Menu";
import { AddNewMedPage } from "./pages/AddNewMedPage";
import { EditMedPage } from "./pages/EditMedPage";
import { FilterMedLabPage } from "./pages/FilterMedLabPage";
import { LoginPage } from "./pages/LoginPage";
import { HomePage } from "./pages/HomePage";
import { RegisterPage } from "./pages/RegisterPage";
import { DeleteUserPage } from "./pages/DeleteUserPage";

function App() {
  return (
    <main className="app">
      <Header />
      <Menu />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/NewMed" element={<AddNewMedPage />} />
        <Route path="/EditMed" element={<EditMedPage />} />
        <Route path="/FilterMed" element={<FilterMedLabPage />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/Register" element={<RegisterPage />} />
        <Route path="/DeleteUser" element={<DeleteUserPage />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
