import React from 'react';
import { atom } from 'recoil';
import { Reservation } from 'types/reservation';

export type ReservationList = {
    reservations: Array<Reservation>;
}

const reservationListAtom = atom<Reservation[]>({
    key: "reservationListAtom",
    default: [],
});

export default reservationListAtom;
