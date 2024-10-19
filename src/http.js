import axios from "axios"

export const fetchAvailablePlaces = async () => {
    const result = await axios.get('http://localhost:3000/places')
    
    return result.data.places
}

export const updateUserPlaces = async (selectedPlace) => {
    const result = await axios.put('http://localhost:3000/user-places', selectedPlace)

    console.log(result)

    return result.data
}

export const fetchUserPlaces = async () => {
    try {
        const result = await axios.get('http://localhost:3000/user-places')

        return result.data
    } catch (error) {
        console.log(error)
    }
}