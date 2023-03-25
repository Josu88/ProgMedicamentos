import "../App.css";
import { useState } from "react";
import { sendMedService } from "../services";

export const NewMed = ({ newMed }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleForm = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const data = new FormData(e.target);
      const response = await sendMedService({ data });

      newMed(response);

      e.target.reset();
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <h1>Añadir Nueva Medicina</h1>
      <form className="new-Medicinas" onSubmit={handleForm}>
        <fieldset>
          <label htmlFor="Lab">Laboratorio</label>
          <input type="text" name="Lab" id="Lab" required />
        </fieldset>

        <fieldset>
          <label htmlFor="Composition">Composition</label>
          <input type="text" name="Composition" id="Composition" required />
        </fieldset>

        <fieldset>
          <label htmlFor="Name">Name</label>
          <input type="text" name="Name" id="Name" required />
        </fieldset>

        <fieldset>
          <label htmlFor="Units">Units</label>
          <input type="text" name="Units" id="Units" required />
        </fieldset>

        <button className="send">enviar</button>
        {error ? <p>{error}</p> : null}
        {loading ? <p>posting Med...</p> : null}
      </form>
    </>
  );
};
