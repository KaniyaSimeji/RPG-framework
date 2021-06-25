let InEnemyVariableExp:number = 0;

export class enemy_exp {

  constructor() {
  }

  ResetExp_enemy() {
    return InEnemyVariableExp;
  }

  DropExp_enemy(EnemyDrop:number){
    return InEnemyVariableExp+EnemyDrop;
  }




}
