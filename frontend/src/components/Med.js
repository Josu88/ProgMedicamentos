import "../App.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  deleteMedService,
  addUnitsService,
  delUnitsService,
} from "../services";

export const Med = ({ Med, removeMed }) => {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const deleteMed = async (id) => {
    try {
      await deleteMedService({ id });

      if (removeMed) {
        removeMed(id);
      } else {
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  const addUnit = async (id) => {
    try {
      const data = await addUnitsService({ id });

      if (!data) {
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  const delUnit = async (id) => {
    try {
      const data = await delUnitsService({ id });

      if (!data) {
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  const MedId = Med.id;

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
                if (window.confirm("Are you sure?")) deleteMed({ MedId });
              }}
            >
              Borrar
            </button>
            <button
              className="addUnitButton"
              onClick={() => {
                addUnit({ MedId });
              }}
            >
              +
            </button>
            <button
              className="delUnitButton"
              onClick={() => {
                delUnit({ MedId });
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
