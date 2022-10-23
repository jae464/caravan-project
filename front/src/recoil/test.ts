import { atom } from 'recoil';

export const testAtom = atom<{ test: number }>({
  key: 'test',
  default: { test: 1 },
});
