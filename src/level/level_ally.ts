import {AllyObject} from "../status/status";

export class ally_exp extends AllyObject {
  private InAllyVariableExp:number

  constructor(AttackPower:number,hp:number,MagicPower:number,Guard:number) {
    super(AttackPower,hp,MagicPower,Guard);
    this.InAllyVariableExp = 0;
  }

  ResetExp_ally():number {
    return this.InAllyVariableExp -= this.InAllyVariableExp;
  }  //返る値は「0」なはず...?

  ReceiveExp_ally(AllyDrop:number):number{
    return this.InAllyVariableExp + AllyDrop;
  }

  LevelUp_if(LevelupExp:number):boolean{
    if (this.InAllyVariableExp >= LevelupExp) {
          return true
    }else {
    return false
  }}

  LevelUp_now(ax:number,bx:number,cx:number,dx:number):void{
      try {
        if (this.LevelUp_if(5) === true) {
          this.LevelUp_StatusUp(ax,bx,cx,dx);
        } else {
          this.LevelUp_StatusUp(0,0,0,0);
        }
      } catch (e) {
        console.error(e);
      }
  }
}

