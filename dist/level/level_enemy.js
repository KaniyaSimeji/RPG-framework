"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.enemy_exp = void 0;
let in_variable_exp = 0;
class enemy_exp {
    constructor() {
    }
    Reset_exp() {
        return in_variable_exp;
    }
    drop_exp(EnemyDrop) {
        return in_variable_exp + EnemyDrop;
    }
}
exports.enemy_exp = enemy_exp;
