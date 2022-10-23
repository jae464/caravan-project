import { atom } from "recoil";

export type UserState = {
  id?: number;
  employeeNumber?: number;
  name?: string;
};

export const userAtom = atom<UserState>({
  key: "user",
  default: {
    id: 1,
    employeeNumber: 1,
    name: '김민수',
  },
});
