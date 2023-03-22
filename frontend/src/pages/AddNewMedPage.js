import "../App.css";
import { useState } from "react";
import { sendMedService } from "../services";
import { NavLink } from "react-router-dom";
import useMeds from "../hooks/useMeds";
import { MedList } from "../components/MedList";
import { getAllMedService } from "../services";

export const AddNewMedPage = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [env, setEnv] = useState(false);
  const { med } = useMeds(env);

  const handleForm = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const data = new FormData(e.target);
      await sendMedService({ data });
      await getAllMedService();
      setEnv(true);

      e.target.reset();
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <section>
      <h1 className="titleAddMed">Añadir Nueva Medicina</h1>
      <form className="FormAddMed" onSubmit={handleForm}>
        <fieldset>
          <label htmlFor="Lab">Lab</label>
        </fieldset>
        <fieldset>
          <input type="text" name="Lab" id="Lab" required />
        </fieldset>

        <fieldset>
          <label htmlFor="Composition">Composition</label>
        </fieldset>
        <fieldset>
          <input type="text" name="Composition" id="Composition" required />
        </fieldset>

        <fieldset>
          <label htmlFor="Name">Name</label>
        </fieldset>
        <fieldset>
          <input type="text" name="Name" id="Name" required />
        </fieldset>

        <fieldset>
          <label htmlFor="Units">Units</label>
        </fieldset>
        <fieldset>
          <input type="text" name="Units" id="Units" required />
        </fieldset>

        <button className="ButtonForm">enviar</button>
        {error ? <p>{error}</p> : null}
        {loading ? <p>posting Meds...</p> : null}
      </form>
      <h1>Lista de Medicinas</h1>
      <MedList Meds={med} />
      <nav>
        <NavLink to={"/"}>HomePage</NavLink>
      </nav>
    </section>
  );
};
