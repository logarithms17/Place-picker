import { useEffect, useState } from "react";
import Places from "./Places.jsx";
import axios from "axios";

export default function AvailablePlaces({ onSelectPlace }) {
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const result = await axios.get("http://localhost:3000/places");
        setAvailablePlaces(result.data.places);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

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
