import "../App.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { deleteNewsService } from "../services";

export const Med = ({ Med, removeMed }) => {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const deleteMed = async (id) => {
    try {
      await deleteNewsService({ id });

      if (removeMed) {
        removeMed(id);
      } else {
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <ul className="Med-list">
      <li>
        <article className="Medicines">
          <p>Id: {Med.id}</p>
          <p>Lab: {Med.Lab}</p>
          <p>Composition: {Med.Composition}</p>
          <p>Name: {Med.Name}</p>
          <p>Units: {Med.Units}</p>
          <>
            <span>
              <button
                className="DelButton"
                onClick={() => {
                  if (window.confirm("Are you sure?")) deleteMed(Med.id);
                }}
              >
                Delete news
              </button>
            </span>
            {error ? <p className="MenError">{error}</p> : null}
          </>
        </article>
      </li>
    </ul>
  );
};
