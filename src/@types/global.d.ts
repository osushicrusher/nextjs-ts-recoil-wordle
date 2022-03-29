/**
 * @description 升目に入りうる値
 * ex.
 * [
 *  { squares: [null, null, null, null, null, null, null, null, null] },
 *  { squares: [null, null, null, null, null, null, null, 'X', null] },
 *  { squares: [null, null, null, null, 'O', null, null, 'X', null] }
 * ]
 */

type SquareValueType = null | 'X' | 'O';

