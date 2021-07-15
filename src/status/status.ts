/**
 *
 *
 * @export
 * @class AllyObject
 */
export class AllyObject {
  AttackPower:number
  hp:number
  MagicPower:number
  Guard:number
    /**
     * Creates an instance of AllyObject.
     * @param {number} AttackPower
     * @param {number} hp
     * @param {number} MagicPower
     * @param {number} Guard
     * @memberof AllyObject
     */
    constructor(AttackPower:number,hp:number,MagicPower:number,Guard:number){
      this.AttackPower = AttackPower
      this.hp = hp
      this.MagicPower = MagicPower
      this.Guard = Guard
    }

  /**
   *
   *
   * @param {number} aaa
   * @param {number} bbb
   * @param {number} ccc
   * @param {number} ddd
   * @memberof AllyObject
   */
  LevelUp_StatusUp(aaa:number, bbb:number, ccc:number, ddd:number):void{
    this.AttackPower += aaa
    this.hp += bbb
    this.MagicPower += ccc
    this.Guard += ddd
  }

}
