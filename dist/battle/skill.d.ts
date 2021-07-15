import { AllyObject } from '../status/status';
export declare class skill extends AllyObject {
    constructor(AttackPower: number, hp: number, MagicPower: number, Guard: number);
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
    add(name: string, MagicPowerNumber: number, AttackPowerNumber?: number, hpnumber?: number, GuardNumber?: number): {
        name: string;
        MPN: number;
        APN: number;
        hpnumber: number;
        GN: number;
    };
}
