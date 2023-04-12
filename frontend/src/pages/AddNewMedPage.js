import "../App.css";
import { NavLink } from "react-router-dom";
import useMeds from "../hooks/useMeds";
import { MedList } from "../components/MedList";
import { NewMed } from "../components/NewMed";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const AddNewMedPage = () => {
  const { token } = useContext(AuthContext);

  const { med, addMed, addUnit, remUnit, removeMed } = useMeds(token);

  return (
    <section>
      <NewMed newMed={addMed} />
      <h1>Lista de Medicinas</h1>
      <MedList
        Meds={med}
        addUnit={addUnit}
        remUnit={remUnit}
        removeMed={removeMed}
      />
      <nav className="ButtonHomeAM">
        <NavLink to={"/"}>HomePage</NavLink>
      </nav>
    </section>
  );
};
