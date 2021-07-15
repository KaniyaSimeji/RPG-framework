import { AllyObject } from "../status/status";
/**
 *
 * @module ank
 * @export
 * @class ally_exp
 * @extends {AllyObject}
 */
export declare class ally_exp extends AllyObject {
    private InAllyVariableExp;
    /**
     * Creates an instance of ally_exp.
     * @param {number} AttackPower
     * @param {number} hp
     * @param {number} MagicPower
     * @param {number} Guard
     * @memberof ally_exp
     */
    constructor(AttackPower: number, hp: number, MagicPower: number, Guard: number);
    /**
     *
     *
     * @return {*}  {number}
     * @memberof ally_exp
     */
    ResetExp_ally(): number;
    /**
     *
     *
     * @param {number} AllyDrop
     * @return {*}  {number}
     * @memberof ally_exp
     */
    ReceiveExp_ally(AllyDrop: number): number;
    /**
     *
     *
     * @param {number} LevelupExp
     * @return {*}  {boolean}
     * @memberof ally_exp
     */
    LevelUp_if(LevelupExp: number): boolean;
    /**
     *
     *
     * @param {number} ax
     * @param {number} bx
     * @param {number} cx
     * @param {number} dx
     * @memberof ally_exp
     */
    LevelUp_now(ax: number, bx: number, cx: number, dx: number): void;
}
