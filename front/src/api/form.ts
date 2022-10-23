import axios, { AxiosError, AxiosResponse } from "axios";
import { ReservationRegisterData } from "types/ReservationRegisterData";
import { API_DESTINATION } from "utils/consts";

const reservationRegister = (data: ReservationRegisterData) => {
  return axios
    .post(`${API_DESTINATION}/reservation`, data)
    .then((response: AxiosResponse) => {
      return response.data;
    })
    .catch((error: AxiosError) => {
      return error;
    });
};

export { reservationRegister };
