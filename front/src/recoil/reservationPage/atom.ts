import React from 'react';
import { atom } from 'recoil';

export type ReservationPageState = {
    components: Array<React.ReactNode>;
}

const reservationPageAtom = atom<ReservationPageState>({
    key: "reservationPageAtom",
    default: {components: []},
});

export default reservationPageAtom;