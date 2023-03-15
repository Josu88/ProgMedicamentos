import "../App.css";
import { useState } from "react";
import { sendMedService } from "../services";

export const AddNewMedPage = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleForm = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const data = new FormData(e.target);
      await sendMedService({ data });

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
        {loading ? <p>posting Meds...</p> : null}
      </form>
    </section>
  );
};
