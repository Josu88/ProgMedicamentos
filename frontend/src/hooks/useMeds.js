import { useEffect, useState } from "react";
import { getAllMedService } from "../services";

const useMeds = (token) => {
  const [med, setMed] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadMeds = async () => {
      try {
        setLoading(true);

        const data = await getAllMedService();

        setMed(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    loadMeds();
  }, [token]);

  const addUnit = (id) => {
    const index = med.findIndex((newObject) => newObject.id === id);
    med[index].Units++;
    setMed([...med]);
  };

  const remUnit = (id) => {
    const index = med.findIndex((newObject) => newObject.id === id);
    med[index].Units--;
    setMed([...med]);
  };

  const removeMed = async (id) => {
    try {
      setMed(med.filter((Med) => Med.id !== id));
    } catch (error) {
      setError(error.message);
    }
  };

  const addMed = (data) => {
    setMed([data, ...med]);
  };

  const editMed = (id, lab) => {
    const index = med.findIndex((newObject) => newObject.id === id);
    med[index].Lab = lab;
    setMed([...med]);
  };

  return { med, error, loading, addMed, addUnit, remUnit, removeMed, editMed };
};

export default useMeds;
