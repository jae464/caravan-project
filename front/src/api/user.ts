import axios from "axios"
import { API_DESTINATION } from "utils/consts"

export const signUp = async (employeeNumber: string, password: string, name: string) => {
    try {
        const data = {employeeNumber: Number(employeeNumber), password, name}
        const result = await axios.post(`${API_DESTINATION}/users`, data)
        console.log(result);
    }
    catch (e) {

    }
}

export const getUserByEmployeeNumber = async (employeeNumber: string) => {
    try {
        console.log(employeeNumber);
        const result = await axios.get(`${API_DESTINATION}/users/${employeeNumber}`);
        console.log(result.data);
        return result.data;
    }
    catch (e) {

    }
}

export const doLogin = async (employeeNumber: string, password: string) => {
    try {
        console.log(employeeNumber, password)
        const result = await axios.post(`${API_DESTINATION}/users/login`,{employeeNumber, password});
        console.log(result);
        return result.data;
    }
    catch (e) {

    }
}