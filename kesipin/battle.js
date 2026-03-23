const Battle = {
start(enemy){
  let p = GAME.party[0];
  let log = `${p.name} VS ${enemy.name}<br>`;
  while(p.hp>0 && enemy.hp>0){
    enemy.hp -= p.atk;
    log += `${p.name}攻撃 ${enemy.hp}<br>`;
    if(enemy.hp<=0) break;
    p.hp -= enemy.atk;
    log += `${enemy.name}攻撃 ${p.hp}<br>`;
  }
  document.getElementById("game").innerHTML = log + (p.hp>0 ? "勝利！" : "敗北…");
}
};