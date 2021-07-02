const InEnemyVariableExp = 0;

export class enemy_exp {


  ResetExp_enemy():void {
    InEnemyVariableExp;
  }

  DropExp_enemy(EnemyDrop:number):number{
    return InEnemyVariableExp+EnemyDrop;
  }

  

}
