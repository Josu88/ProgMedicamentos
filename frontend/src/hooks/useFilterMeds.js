import { useEffect, useState } from "react";
import { getFilterLabMedService } from "../services";

const useFilterMeds = (Lab) => {
  const [med, setMed] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadMeds = async () => {
      try {
        setLoading(true);

        const data = await getFilterLabMedService(Lab);

        setMed(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    loadMeds();
  }, [Lab]);

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

  return { med, error, loading, addMed, addUnit, remUnit, removeMed };
};

export default useFilterMeds;
