"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.skill = void 0;
const status_1 = require("../status/status");
class skill extends status_1.AllyObject {
    constructor(AttackPower, hp, MagicPower, Guard) {
        super(AttackPower, hp, MagicPower, Guard);
    }
    /**
     *
     *
     * @param {string} name
     * @param {number} MagicPowerNumber
     * @param {number} [AttackPowerNumber=0]
     * @param {number} [hpnumber=0]
     * @param {number} [GuardNumber=0]
     * @return {*}
     * @memberof skill
     */
    add(name, MagicPowerNumber, AttackPowerNumber = 0, hpnumber = 0, GuardNumber = 0) {
        return { name: name, MPN: MagicPowerNumber, APN: AttackPowerNumber, hpnumber: hpnumber, GN: GuardNumber };
    }
}
exports.skill = skill;
