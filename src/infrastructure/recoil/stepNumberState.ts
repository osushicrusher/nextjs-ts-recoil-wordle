import { atom } from 'recoil'

/**
 * @description 現在のステップ数
 */

export const stepNumberState = atom<number>({
  key: 'tic-tac-toe/stepNumberState',
  default: 0
})
