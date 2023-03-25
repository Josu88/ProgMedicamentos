import { useEffect, useState } from "react";
import { getAllMedService } from "../services";

const useMeds = () => {
  const [med, setMed] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadNews = async () => {
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

    loadNews();
  }, []);

  const addMed = (data) => {
    setMed([data, ...med]);
  };

  return { med, error, loading, addMed };
};

export default useMeds;
