import { useEffect, useState } from "react";

const useFetch = (fetchFn, initialValue) => { //receives anytype of fetch function
    const [isFetching, setIsFetching] = useState(false)
    const [error, setError] = useState()
    const [fetchedData, setFetchedData] = useState(initialValue)

    useEffect(() => {
    const fetchData = async () => {
      setIsFetching(true);
      try {
        const result = await fetchFn();

        setFetchedData(result);
      } catch (error) {
        console.log(error);
        setError({ message: error.message } || "Failed to fetch data");
      }
    };

    fetchData();
    setIsFetching(false);
    }, [fetchFn]);
    
    return {
        isFetching,
        error,
        fetchedData,
        setFetchedData
    }
}

export default useFetch