import { atom } from 'recoil';

export type ReservationState = {
    roomId?: number;
    meetingDate?: Date;
    startTime?: number;
    endTime?: number;
}

export const reservationAtom = atom<ReservationState>({
    key: 'reservation',
    default: {
        meetingDate: new Date(),
        startTime: 900,
        endTime: 900,
    }
})