import { useEffect, useState } from "react";
import { getFilterLabMedService } from "../services";

const useFilterMeds = (Lab) => {
  const [med, setMed] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadNews = async () => {
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

    loadNews();
  }, [Lab]);

  const addMed = (data) => {
    setMed([data, ...med]);
  };

  return { med, error, loading, addMed };
};

export default useFilterMeds;
