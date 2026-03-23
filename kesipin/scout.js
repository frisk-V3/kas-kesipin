const Scout = {
random(){
  let m = DATA.monsters[Math.floor(Math.random()*DATA.monsters.length)];
  let monster = getMonster(m.id);
  let success = Math.random();
  if(success>0.5){
    GAME.party.push(monster);
    UI.log(`${monster.name}をスカウト成功！`);
  }else{
    UI.log("スカウト失敗…");
  }
}
};