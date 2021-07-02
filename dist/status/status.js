"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AllyObject = void 0;
class AllyObject {
    constructor(AttackPower, hp, MagicPower, Guard) {
        this.AttackPower = AttackPower;
        this.hp = hp;
        this.MagicPower = MagicPower;
        this.Guard = Guard;
    }
    LevelUp_StatusUp(aaa, bbb, ccc, ddd) {
        this.AttackPower += aaa;
        this.hp += bbb;
        this.MagicPower += ccc;
        this.Guard += ddd;
    }
}
exports.AllyObject = AllyObject;
