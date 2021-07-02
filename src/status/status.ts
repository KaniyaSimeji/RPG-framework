export class AllyObject {
  AttackPower:number
  hp:number
  MagicPower:number
  Guard:number
    constructor(AttackPower:number,hp:number,MagicPower:number,Guard:number){
      this.AttackPower = AttackPower
      this.hp = hp
      this.MagicPower = MagicPower
      this.Guard = Guard
    }

  LevelUp_StatusUp(aaa:number, bbb:number, ccc:number, ddd:number):void{
    this.AttackPower += aaa
    this.hp += bbb
    this.MagicPower += ccc
    this.Guard += ddd
  }

}
