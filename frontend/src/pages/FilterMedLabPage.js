import { NavLink } from "react-router-dom";
import { useState } from "react";
import { getFilterLabMedService } from "../services";
import useFilterMeds from "../hooks/useFilterMeds";
import { MedList } from "../components/MedList";

export const FilterMedLabPage = () => {
  const [Lab, setLab] = useState([]);
  const { med, addUnit, remUnit, removeMed } = useFilterMeds(Lab);
  const [visible, setVisible] = useState(false);
  const [error, setError] = useState("");

  const handleForm = async (e) => {
    e.preventDefault();
    try {
      await getFilterLabMedService(Lab);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <section>
      <h1 className="titleFilterMed">
        Lista de Medicinas filtradas por Laboratorio
      </h1>
      <form onSubmit={handleForm}>
        <fieldset>
          <label className="important">Laboratorio a buscar?: </label>
          <input
            type="text"
            id="inputLab"
            value={Lab}
            onChange={(e) => setLab(e.target.value)}
          />
        </fieldset>
        <fieldset>
          <button className="ButtonForm" onClick={() => setVisible(true)}>
            Mostrar
          </button>
        </fieldset>
        {error ? <p>{error}</p> : null}
      </form>
      <h1>Lista de Medicinas</h1>
      {visible ? (
        <MedList
          Meds={med}
          addUnit={addUnit}
          remUnit={remUnit}
          removeMed={removeMed}
        />
      ) : (
        `Pulsa el boton para ver las Medicinas`
      )}
      <nav className="ButtonHomeFLM">
        <NavLink to={"/"}>HomePage</NavLink>
      </nav>
    </section>
  );
};
