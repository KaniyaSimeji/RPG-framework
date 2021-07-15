"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ally_exp = void 0;
const status_1 = require("../status/status");
/**
 *
 * @module ank
 * @export
 * @class ally_exp
 * @extends {AllyObject}
 */
class ally_exp extends status_1.AllyObject {
    /**
     * Creates an instance of ally_exp.
     * @param {number} AttackPower
     * @param {number} hp
     * @param {number} MagicPower
     * @param {number} Guard
     * @memberof ally_exp
     */
    constructor(AttackPower, hp, MagicPower, Guard) {
        super(AttackPower, hp, MagicPower, Guard);
        this.InAllyVariableExp = 0;
    }
    /**
     *
     *
     * @return {*}  {number}
     * @memberof ally_exp
     */
    ResetExp_ally() {
        return this.InAllyVariableExp -= this.InAllyVariableExp;
    } //返る値は「0」なはず...?
    /**
     *
     *
     * @param {number} AllyDrop
     * @return {*}  {number}
     * @memberof ally_exp
     */
    ReceiveExp_ally(AllyDrop) {
        return this.InAllyVariableExp + AllyDrop;
    }
    /**
     *
     *
     * @param {number} LevelupExp
     * @return {*}  {boolean}
     * @memberof ally_exp
     */
    LevelUp_if(LevelupExp) {
        if (this.InAllyVariableExp >= LevelupExp) {
            return true;
        }
        else {
            return false;
        }
    }
    /**
     *
     *
     * @param {number} ax
     * @param {number} bx
     * @param {number} cx
     * @param {number} dx
     * @memberof ally_exp
     */
    LevelUp_now(ax, bx, cx, dx) {
        try {
            if (this.LevelUp_if(5) === true) {
                this.LevelUp_StatusUp(ax, bx, cx, dx);
            }
            else {
                this.LevelUp_StatusUp(0, 0, 0, 0);
            }
        }
        catch (e) {
            console.error(e);
        }
    }
}
exports.ally_exp = ally_exp;
