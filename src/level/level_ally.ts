import {AllyObject} from "../status/status";

/**
 *
 * @module ank
 * @export
 * @class ally_exp
 * @extends {AllyObject}
 */
export class ally_exp extends AllyObject {
  private InAllyVariableExp:number

  /**
   * Creates an instance of ally_exp.
   * @param {number} AttackPower
   * @param {number} hp
   * @param {number} MagicPower
   * @param {number} Guard
   * @memberof ally_exp
   */
  constructor(AttackPower:number,hp:number,MagicPower:number,Guard:number) {
    super(AttackPower,hp,MagicPower,Guard);
    this.InAllyVariableExp = 0;
  }

  /**
   *
   *
   * @return {*}  {number}
   * @memberof ally_exp
   */
  ResetExp_ally():number {
    return this.InAllyVariableExp -= this.InAllyVariableExp;
  }  //返る値は「0」なはず...?

  /**
   *
   *
   * @param {number} AllyDrop
   * @return {*}  {number}
   * @memberof ally_exp
   */
  ReceiveExp_ally(AllyDrop:number):number{
    return this.InAllyVariableExp + AllyDrop;
  }

  /**
   *
   *
   * @param {number} LevelupExp
   * @return {*}  {boolean}
   * @memberof ally_exp
   */
  LevelUp_if(LevelupExp:number):boolean{
    if (this.InAllyVariableExp >= LevelupExp) {
          return true
    }else {
    return false
  }}

  /**
   *
   *
   * @param {number} ax
   * @param {number} bx
   * @param {number} cx
   * @param {number} dx
   * @memberof ally_exp
   */
  LevelUp_now(levelup_exp:number,ax:number,bx:number,cx:number,dx:number):void{
      try {
        if (this.LevelUp_if(levelup_exp) === true) {
          this.LevelUp_StatusUp(ax,bx,cx,dx);
        } else {
          this.LevelUp_StatusUp(0,0,0,0);
        }
      } catch (e) {
        console.error(e);
      }
  }
}

