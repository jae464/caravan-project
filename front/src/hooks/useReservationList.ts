import React, { useState } from "react";
import { SetterOrUpdater, useRecoilState } from "recoil";
import reservationListAtom, { ReservationList } from "recoil/reservationStatusPage/atom";
import { Reservation } from "types/reservation";

type useReservationListFn = {
    (initialValues?: Reservation[]): {
        reservationList: Reservation[];
        setReservationList: SetterOrUpdater<Reservation[]>;
        addReservation: (reservation: Reservation[]) => void;
        // removeReservation: (reservation: Reservation) => void;
    };
};

const useReservationListHooks: useReservationListFn = (initialValues = []) => {
    // const [arr, setArr] = useState<React.ReactNode[]>(initialValues);
    const [reservationList, setReservationList] = useRecoilState(reservationListAtom);
    const addReservation = (reservation: Reservation[]): void => {
        setReservationList({...reservationList, ...reservation});
    }
    // console.log(reservationList);
    return {reservationList, setReservationList, addReservation};
}

export default useReservationListHooks;