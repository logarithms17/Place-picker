import { useEffect, useState } from "react";
import Places from "./Places.jsx";
import axios from "axios";
import Error from "./Error.jsx";

export default function AvailablePlaces({ onSelectPlace }) {
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const result = await axios.get("http://localhost:3000/places");
        setAvailablePlaces(result.data.places);
      } catch (error) {
        console.log(error);
        setError(error);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  if (error) {
    return (
      <Error
        title="An error occured!"
        message={
          error.message || "Could not fetch any places, please try again"
        }
      />
    );
  }
  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={loading}
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
