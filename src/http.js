import axios from "axios"

export const fetchAvailablePlaces = async () => {
    const result = await axios.get('http://localhost:3000/places')
    
    console.log(result)
    
    return result.data.places
}