import { Reservation } from 'types/reservation';
import { time_range } from './consts';
import { room_list } from './consts';
export const getTimeFormat = (time: number) => {
  return time_range.filter(t => t.value === time)[0].label;
};

export const getRoomIdByRoomName = (name: string): number => {
  for (let i = 0; i < room_list.length; i++) {
    if (room_list[i] === name) {
      return i;
    }
  }
  return 0;
};

export const filterAvailableReservation = (
  startTime: number,
  endTime: number,
  reservationList: Reservation[]
): Reservation[] => {
  return reservationList.filter(v => {
    if (!v.startTime || !v.endTime) return false;
    console.log(`${startTime} ${endTime} ${v.startTime} ${v.endTime}`);
    console.log('11');
    if (startTime >= v.startTime && endTime <= v.endTime) {
      console.log('해당 시간대 불가능');
      return true;
    }
    return false;
  });
};
