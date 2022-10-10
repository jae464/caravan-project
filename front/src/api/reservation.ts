import axios from "axios";
import { Reservation } from "types/reservation";
import { API_DESTINATION } from "utils/consts";

export const addReservation = async (reservation: Reservation) => {
    try{
        const result = await axios.post(`${API_DESTINATION}/reservation`, reservation);
        console.log(result);    
    }
    catch (e) {
        
    }
}