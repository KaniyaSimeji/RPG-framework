"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ally_exp = void 0;
const status_1 = require("../status/status");
class ally_exp extends status_1.AllyObject {
    constructor(AttackPower, hp, MagicPower, Guard) {
        super(AttackPower, hp, MagicPower, Guard);
        this.InAllyVariableExp = 0;
    }
    ResetExp_ally() {
        return this.InAllyVariableExp -= this.InAllyVariableExp;
    } //返る値は「0」なはず...?
    ReceiveExp_ally(AllyDrop) {
        return this.InAllyVariableExp + AllyDrop;
    }
    LevelUp_if(LevelupExp) {
        if (this.InAllyVariableExp >= LevelupExp) {
            return true;
        }
        else {
            return false;
        }
    }
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
