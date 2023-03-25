import "../App.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  deleteMedService,
  addUnitsService,
  delUnitsService,
} from "../services";

export const Med = ({ Med }) => {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const deleteMed = async ({ idMed }) => {
    try {
      const data = await deleteMedService({ idMed });

      if (!data) {
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  const addUnit = async ({ idMed }) => {
    try {
      const data = await addUnitsService({ idMed });

      if (!data) {
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  const delUnit = async ({ idMed }) => {
    try {
      const data = await delUnitsService({ idMed });

      if (!data) {
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  let idMed = Med.id;

  return (
    <ul className="Med-list">
      <li>
        <article className="Medicines" id={Med.id}>
          <p>Lab: {Med.Lab}</p>
          <p>Composition: {Med.Composition}</p>
          <p>Name: {Med.Name}</p>
          <p>Units: {Med.Units}</p>
          <span className="ButtonBar">
            <button
              className="DelButton"
              onClick={() => {
                if (window.confirm("Are you sure?")) deleteMed({ idMed });
              }}
            >
              Borrar
            </button>
            <button
              className="addUnitButton"
              onClick={() => {
                addUnit({ idMed });
              }}
            >
              +
            </button>
            <button
              className="delUnitButton"
              onClick={() => {
                delUnit({ idMed });
              }}
            >
              -
            </button>
          </span>
          {error ? <p className="MenError">{error}</p> : null}
        </article>
      </li>
    </ul>
  );
};
