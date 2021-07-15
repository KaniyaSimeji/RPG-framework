import {AllyObject} from '../status/status';

/**
 *
 *
 * @interface skills
 */
interface skills{
    name:string,
    MPN:number,
    APN:number,
    hpnumber:number,
    GN:number
}
export class skill extends AllyObject{
    constructor(AttackPower:number,hp:number,MagicPower:number,Guard:number) {
     super(AttackPower,hp,MagicPower,Guard)   
    } 
    /**
     *
     *
     * @param {string} name
     * @param {number} MagicPowerNumber
     * @param {number} [AttackPowerNumber=0]
     * @param {number} [hpnumber=0]
     * @param {number} [GuardNumber=0]
     * @return {*}  {skills}
     * @memberof skill
     */

    add(name:string, MagicPowerNumber:number,AttackPowerNumber = 0,hpnumber = 0,GuardNumber =0):skills{
        return {name:name,MPN:MagicPowerNumber,APN:AttackPowerNumber,hpnumber:hpnumber,GN:GuardNumber};
    }
 

    skillRun(obj:{name:string,MPN:number,AttackPowerNumber:number,hpnumber:number,GuardNumber:number}){
        

        return {}
    }
}