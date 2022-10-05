import { atom } from 'recoil';

export type UserState = {
    id?: number;
    employeeNumber?: number;
    name?: string;
}
export const user = atom<UserState>({
    key: "user",
    default: {}
})