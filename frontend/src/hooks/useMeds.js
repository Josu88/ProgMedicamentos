import { useEffect, useState, useContext } from "react";
import { getAllMedService } from "../services";
import { AuthContext } from "../context/AuthContext";

const useMeds = () => {
  const [med, setMed] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { token } = useContext(AuthContext);

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
  }, [token]);

  const addMed = (data) => {
    setMed([data, ...med]);
  };

  return { med, error, loading, addMed };
};

export default useMeds;
