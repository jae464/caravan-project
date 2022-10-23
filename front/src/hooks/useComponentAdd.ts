import React, { useState } from "react";
import { SetterOrUpdater, useRecoilState } from "recoil";
import reservationPageAtom, {
  ReservationPageState,
} from "recoil/reservationPage/atom";

type useComponentFn = {
  (initialValues?: React.ReactNode[]): {
    components: ReservationPageState;
    setComponent: SetterOrUpdater<ReservationPageState>;
    clearComponent: () => void;
    addComponent: (component: React.ReactNode[]) => void;
  };
};

const useComponentHooks: useComponentFn = (initialValues = []) => {
  const [components, setComponent] = useRecoilState(reservationPageAtom);
  const clearComponent = () => {
    setComponent({ components: [] });
  };
  const addComponent = (component: React.ReactNode[]): void => {
    setComponent({ components: [...components.components, ...component] });
  };
  console.log(components);
  return { components, clearComponent, setComponent, addComponent };
};

export default useComponentHooks;
