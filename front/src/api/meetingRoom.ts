import axios from "axios"
import { API_DESTINATION } from "utils/consts"

export const getAllRoom= async (floor: string) => {
    try {
        console.log(floor);
        const result = await axios.get(`${API_DESTINATION}/meetingroom/${floor}`);
        return result.data
    }
    catch (e) {

    }
}