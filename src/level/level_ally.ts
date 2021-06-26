import {AllyObject} from "../status/status";

export class ally_exp {
  private InAllyVariableExp:number

  constructor() {
    this.InAllyVariableExp = 0;
  }

  ResetExp_ally() {
    return this.InAllyVariableExp -= this.InAllyVariableExp;
  }  //返る値は「0」なはず...?

  ReceiveExp_ally(AllyDrop:number){
    return this.InAllyVariableExp + AllyDrop;
  }

  LevelUp_if(LevelupExp:number){
    if (this.InAllyVariableExp >= LevelupExp) {
          return true
    }else {
    return false
  }}

  LevelUp_StatusUp(AttackPower?:number,hp?:number,MagicPower?:number,Guard?:number){ //レベルが上がるごとになんの数値が基本のステータスに与えられるか
    return
  }


}
