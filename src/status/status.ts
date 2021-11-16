import {v4 as uuidv4} from 'uuid';

//Character Status
export class status {
    public chara_name: string | undefined;
    public chara_power: number | undefined;
    public chara_guard: number | undefined;
    public chara_speed: number | undefined;
    public chara_hp: number | undefined;
    public chara_mp: number | undefined;
    protected chara_id: string | undefined;

    give_id(chara_name:string):object {
        this.chara_id = uuidv4();
        return {name:this.chara_name, id: this.chara_id}
    }

    
}
