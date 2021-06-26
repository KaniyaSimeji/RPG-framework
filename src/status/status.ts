export class AllyObject {
  AttackPower:number | undefined
  hp:number | undefined
  MagicPower:number | undefined
  Guard:number | undefined
    constructor(AttackPower?:number,hp?:number,MagicPower?:number,Guard?:number){
      this.AttackPower = AttackPower
      this.hp = hp
      this.MagicPower = MagicPower
      this.Guard = Guard
    }



}
