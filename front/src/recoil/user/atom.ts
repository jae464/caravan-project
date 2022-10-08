import { atom } from 'recoil';

export type UserState = {
    id?: number;
    employeeNumber?: number;
    name?: string;
}

export const userAtom = atom<UserState>({
    key: "user",
    default: {}
})