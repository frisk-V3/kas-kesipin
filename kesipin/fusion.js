const Fusion = {
combine(id1,id2){
  let f = DATA.fusion.find(x=>(x.a===id1 && x.b===id2)||(x.a===id2 && x.b===id1));
  if(!f){ UI.log("配合失敗"); return; }
  let newM = getMonster(f.result);
  GAME.party.push(newM);
  UI.log(`${newM.name}誕生！`);
}
};