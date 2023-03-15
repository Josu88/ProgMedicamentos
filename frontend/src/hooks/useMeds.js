import { useEffect, useState } from "react";
import { getAllMedService } from "../services";

const useMeds = () => {
  const [med, setMed] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadMed = async () => {
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

    loadMed();
  }, []);

  const newMed = (data) => {
    setMed([data, ...med]);
  };

  const removeMed = async (id) => {
    try {
      setMed(med.filter((meds) => meds.id !== id));
    } catch (error) {
      setError(error.message);
    }
  };

  return {
    med,
    error,
    loading,
    newMed,
    removeMed,
  };
};

export default useMeds;
