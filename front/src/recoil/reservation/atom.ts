import { atom } from 'recoil';

export type ReservationState = {
    roomId?: number;
    meetingDate?: Date;
    startTime?: number;
    endTime?: number;
}

export const reservationAtom = atom<ReservationState>({
    key: 'reservation',
    default: {}
})