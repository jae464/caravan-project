/* eslint-disable no-empty */
import axios from 'axios';
import moment from 'moment';
import { useRecoilState } from 'recoil';
import { userAtom } from 'recoil/user/atom';
import { Reservation } from 'types/reservation';
import { API_DESTINATION } from 'utils/consts';

export const getAllReservation = async (userId: number) => {
  try {
    const result = await axios.get(`${API_DESTINATION}/reservation/${userId}`);
    console.log(result);
    return result.data;
  } catch (e) {
    console.log(e);
  }
};

export const addReservation = async (reservation: Reservation) => {
  try {
    console.log(reservation);
    const result = await axios.post(
      `${API_DESTINATION}/reservation/`,

      reservation
    );
    console.log(result);
  } catch (e) {}
};

export const removeReservation = async (id: number) => {
  try {
    const result = await axios.delete(`${API_DESTINATION}/reservation/${id}`);
    console.log(result);
  } catch (e) {}
};

export const updateReservation = async (reservation: Reservation) => {
  try {
    const result = await axios.patch(
      `${API_DESTINATION}/reservation/`,
      reservation
    );
    console.log(result);
  } catch (e) {}
};

export const fetchAllReservation = async (): Promise<Reservation[]> => {
  try {
    const result = await axios.get(`${API_DESTINATION}/reservation`);
    return result.data;
  } catch (e) {}
  return [];
};

export const getReservationByDate = async (
  date: Date
): Promise<Reservation[]> => {
  try {
    const day = moment(date).format('YYYY-MM-DD');
    const result = await axios.get(
      `${API_DESTINATION}/reservation?date=${day}`
    );
    console.log(result.data);
    return result.data;
  } catch (e) {}
  return [];
};
