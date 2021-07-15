"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AllyObject = void 0;
/**
 *
 *
 * @export
 * @class AllyObject
 */
class AllyObject {
    /**
     * Creates an instance of AllyObject.
     * @param {number} AttackPower
     * @param {number} hp
     * @param {number} MagicPower
     * @param {number} Guard
     * @memberof AllyObject
     */
    constructor(AttackPower, hp, MagicPower, Guard) {
        this.AttackPower = AttackPower;
        this.hp = hp;
        this.MagicPower = MagicPower;
        this.Guard = Guard;
    }
    /**
     *
     *
     * @param {number} aaa
     * @param {number} bbb
     * @param {number} ccc
     * @param {number} ddd
     * @memberof AllyObject
     */
    LevelUp_StatusUp(aaa, bbb, ccc, ddd) {
        this.AttackPower += aaa;
        this.hp += bbb;
        this.MagicPower += ccc;
        this.Guard += ddd;
    }
}
exports.AllyObject = AllyObject;
