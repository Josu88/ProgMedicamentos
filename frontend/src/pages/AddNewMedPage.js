import "../App.css";
import { NavLink } from "react-router-dom";
import useMeds from "../hooks/useMeds";
import { MedList } from "../components/MedList";
import { NewMed } from "../components/NewMed";

export const AddNewMedPage = () => {
  const { med, addMed } = useMeds();

  return (
    <section>
      <NewMed newMed={addMed} />
      <h1>Lista de Medicinas</h1>
      <MedList Meds={med} />
      <nav className="ButtonHomeAM">
        <NavLink to={"/"}>HomePage</NavLink>
      </nav>
    </section>
  );
};
