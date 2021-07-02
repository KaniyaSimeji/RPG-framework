import { AllyObject } from "../status/status";
export declare class ally_exp extends AllyObject {
    private InAllyVariableExp;
    constructor(AttackPower: number, hp: number, MagicPower: number, Guard: number);
    ResetExp_ally(): number;
    ReceiveExp_ally(AllyDrop: number): number;
    LevelUp_if(LevelupExp: number): boolean;
    LevelUp_now(ax: number, bx: number, cx: number, dx: number): void;
}
