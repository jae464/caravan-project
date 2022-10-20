import React, { useState } from "react";
import { SetterOrUpdater, useRecoilState } from "recoil";
import reservationPageAtom, { ReservationPageState } from "recoil/reservationPage/atom";

type useComponentFn = {
    (initialValues?: React.ReactNode[]): {
        components: ReservationPageState;
        setComponent: SetterOrUpdater<ReservationPageState>;
        addComponent: (component: React.ReactNode[]) => void;
    };
};

const useComponentHooks: useComponentFn = (initialValues = []) => {
    // const [arr, setArr] = useState<React.ReactNode[]>(initialValues);
    const [components, setComponent] = useRecoilState(reservationPageAtom);
    const addComponent = (component: React.ReactNode[]): void => {
        // console.log("addComponent before");
        setComponent({components: [...components.components, ...component]});
        // console.log("addComponent end");
        // console.log(components);
    }
    // console.log(components);
    return {components, setComponent, addComponent};
}

export default useComponentHooks;