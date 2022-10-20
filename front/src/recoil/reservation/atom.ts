import { atom } from 'recoil';

export type ReservationState = {
    id?: number;
    meetingRoomId?: number;
    name?: string;
    meetingDate?: Date;
    startTime?: number;
    endTime?: number;
    done?: boolean;
}

export const reservationAtom = atom<ReservationState>({
    key: 'reservation',
    default: {
        meetingDate: new Date(),
        startTime: 900,
        endTime: 900,
        done: false,
    }
})