import { useState } from "react";
import { editMedService } from "../services";

export const EditNewPage = () => {
  const [error, setError] = useState("");
  const [id, setId] = useState("");
  const [lab, setLab] = useState("");
  const [comp, setComp] = useState("");
  const [name, setName] = useState("");
  const [units, setUnits] = useState("");
  const [message, setMessage] = useState("");

  const handleForm = async (e) => {
    e.preventDefault();

    try {
      await editMedService({ id, lab, comp, name, units });
      setMessage(`Se ha editado correctamente la medicina con id ${id}`);
    } catch (error) {
      setError(error.message);
      setMessage("");
    }
  };
  return (
    <section>
      <form className="edit-news" onSubmit={handleForm}>
        <fieldset>
          <label htmlFor="idNew">Pon el id de la Medicina a modificar</label>
          <input
            type="text"
            name="idNew"
            id="idNew"
            value={id}
            required
            onChange={(e) => setId(e.target.value)}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="datosNew">
            Datos para introducir en la Medicina:
          </label>
          <label htmlFor="Lab">Lab</label>
          <input
            type="text"
            name="Lab"
            id="Lab"
            value={lab}
            required
            onChange={(e) => setLab(e.target.value)}
          />
        </fieldset>

        <fieldset>
          <label htmlFor="comp">Composition</label>
          <input
            type="text"
            name="comp"
            id="comp"
            value={comp}
            required
            onChange={(e) => setComp(e.target.value)}
          />
        </fieldset>

        <fieldset>
          <label htmlFor="Name">Name</label>
          <input
            type="text"
            name="Name"
            id="Name"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
          />
        </fieldset>

        <fieldset>
          <label htmlFor="Units">Units</label>
          <input
            type="text"
            name="Units"
            units
            id="Units"
            value={units}
            required
            onChange={(e) => setUnits(e.target.value)}
          />
        </fieldset>

        <button className="Edit">Edit</button>
        {error ? <p>{error}</p> : null}
        <p>{message}</p>
      </form>
    </section>
  );
};
