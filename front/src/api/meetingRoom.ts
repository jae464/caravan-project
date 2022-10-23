/* eslint-disable no-empty */
import axios from 'axios';
import { API_DESTINATION } from 'utils/consts';

export const getAllRoom = async (floor: string) => {
  try {
    console.log(floor);
    const result = await axios.get(`${API_DESTINATION}/meetingroom/${floor}`);
    return result.data;
  } catch (e) {}
};


export const getRoomById = async (roomId: number) => {
  try {
    const result = await axios.get(
      `${API_DESTINATION}/meetingroom/room/${roomId}`
    );
    return result.data;
  } catch (e) {}
};

