import axios from "axios"

export const fetchAvailablePlaces = async () => {
    const result = await axios.get('http://localhost:3000/places')
    
    return result.data.places
}

export const updateUserPlaces = async (selectedPlace) => {
    const result = await axios.put('http://localhost:3000/user-places', {  places: selectedPlace })

    console.log(result)

    return result.data
}

export const fetchUserPlaces = async () => {
    try {
        const result = await axios.get('http://localhost:3000/user-places')

        //if failed to update user data throw an error
        if (!result.data) {
            throw new Error('Failed to update user data')
        }

        return result.data
    } catch (error) {
        console.log(error)
    }
}