import axios from "axios";
import { Reservation } from "types/reservation";
import { API_DESTINATION } from "utils/consts";

export const getAllReservation = async () => {
    try{
        const result = await axios.get(`${API_DESTINATION}/reservation`);
        console.log(result);
        return result.data;
    }
    catch (e) {
        
    }
}

export const addReservation = async (reservation: Reservation) => {
    try{
        const result = await axios.post(`${API_DESTINATION}/reservation`, reservation);
        console.log(result);    
    }
    catch (e) {
        
    }
}

export const removeReservation = async (key: number) => {
    try{
        const result = await axios.delete(`${API_DESTINATION}/reservation?id=${key}`);
        console.log(result);    
    }
    catch (e) {
        
    }
}