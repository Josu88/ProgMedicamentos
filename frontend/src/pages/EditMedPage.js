import { useState } from "react";
import { editMedService } from "../services";
import { NavLink } from "react-router-dom";
import useMeds from "../hooks/useMeds";
import { MedList } from "../components/MedList";
import { getAllMedService } from "../services";

export const EditMedPage = () => {
  const [error, setError] = useState("");
  const [id, setId] = useState("");
  const [Lab, setLab] = useState("");
  const [Comp, setComp] = useState("");
  const [Name, setName] = useState("");
  const [Units, setUnits] = useState("");
  const [message, setMessage] = useState("");
  const [env, setEnv] = useState(false);
  const { med } = useMeds(env);

  const handleForm = async (e) => {
    e.preventDefault();

    try {
      await getAllMedService();
      await editMedService({ id, Lab, Comp, Name, Units });
      setMessage(`Se ha editado correctamente la medicina con id ${id}`);
      setEnv(true);
    } catch (error) {
      setError(error.message);
      setMessage("");
    }
  };
  return (
    <section>
      <h1 className="titleEditMed">Editar Medicina</h1>
      <form onSubmit={handleForm}>
        <fieldset>
          <label className="important">
            Pon el id de la Medicina a modificar
          </label>
        </fieldset>
        <fieldset>
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
          <label className="important">
            Datos para introducir en la Medicina:
          </label>
        </fieldset>
        <fieldset>
          <label htmlFor="Lab">Lab</label>
        </fieldset>
        <fieldset>
          <input
            type="text"
            name="Lab"
            id="Lab"
            value={Lab}
            required
            onChange={(e) => setLab(e.target.value)}
          />
        </fieldset>

        <fieldset>
          <label htmlFor="comp">Composition</label>
        </fieldset>
        <fieldset>
          <input
            type="text"
            name="comp"
            id="comp"
            value={Comp}
            required
            onChange={(e) => setComp(e.target.value)}
          />
        </fieldset>

        <fieldset>
          <label htmlFor="Name">Name</label>
        </fieldset>
        <fieldset>
          <input
            type="text"
            name="Name"
            id="Name"
            value={Name}
            required
            onChange={(e) => setName(e.target.value)}
          />
        </fieldset>

        <fieldset>
          <label htmlFor="Units">Units</label>
        </fieldset>
        <fieldset>
          <input
            type="text"
            name="Units"
            units
            id="Units"
            value={Units}
            required
            onChange={(e) => setUnits(e.target.value)}
          />
        </fieldset>

        <button className="ButtonForm">Edit</button>
        {error ? <p>{error}</p> : null}
        <p>{message}</p>
      </form>
      <h1>Lista de Medicinas</h1>
      <MedList Meds={med} />
      <nav className="ButtonHomeEM">
        <NavLink to={"/"}>HomePage</NavLink>
      </nav>
    </section>
  );
};
