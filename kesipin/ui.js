const UI = {

log(text){ document.getElementById("game").innerHTML = text; },

startGame(){
  Story.start();
},

chooseStarter(){
  let html = `
    <button onclick="UI.pick(1)">スピード</button>
    <button onclick="UI.pick(2)">安定</button>
    <button onclick="UI.pick(3)">攻撃</button>`;
  this.log(html);
},

pick(id){
  GAME.party.push(getMonster(id));
  this.log("選択完了！初期パーティに追加！");
  Story.showCurrentNode();
},

openParty(){
  let text = "パーティ<br>";
  GAME.party.forEach(m=>{ text += m.name+"<br>"; });
  this.log(text);
},

openFusion(){
  if(GAME.party.length<2){ this.log("2体必要"); return; }
  Fusion.combine(GAME.party[0].id,GAME.party[1].id);
},

openScout(){ Scout.random(); },

save(){ Save.save(); },

load(){ Save.load(); }

};
