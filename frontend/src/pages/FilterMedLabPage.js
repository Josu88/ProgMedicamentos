import { NavLink } from "react-router-dom";
import { useState } from "react";
import { getFilterLabMedService } from "../services";
import useFilterMeds from "../hooks/useFilterMeds";
import { MedList } from "../components/MedList";

export const FilterMedLabPage = () => {
  const [lab, setLab] = useState([]);
  const { med } = useFilterMeds(lab);
  const [visible, setVisible] = useState(false);

  const handleForm = (e) => {
    e.preventDefault();
    getFilterLabMedService(lab);
  };

  return (
    <>
      <section>
        <h2>Lista de Medicinas filtradas por Laboratorio</h2>
        <form onSubmit={handleForm}>
          <fieldset>
            <label htmlFor="NewLab">Laboratorio a buscar?: </label>
            <input
              type="text"
              id="inputLab"
              value={lab}
              onChange={(e) => setLab(e.target.value)}
            />
          </fieldset>
          <fieldset>
            <button className="view" onClick={() => setVisible(true)}>
              Mostrar
            </button>
          </fieldset>
        </form>
        <h1>news</h1>
        {visible ? (
          <MedList Med={med} />
        ) : (
          `Pulsa el boton para ver las Medicinas`
        )}
        <nav>
          <NavLink to={"/"}>HomePage</NavLink>
        </nav>
      </section>
    </>
  );
};
