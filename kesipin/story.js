const Story = {

  // マップノード定義
  map: [
    {id:1,name:"スタート地点",enemy:null,scout:null,next:[2,3]},
    {id:2,name:"教室",enemy:[1],scout:1,next:[4]},
    {id:3,name:"廊下",enemy:[2],scout:2,next:[4,5]},
    {id:4,name:"図書館",enemy:[3],scout:3,next:[6]},
    {id:5,name:"体育館",enemy:[4],scout:4,next:[6]},
    {id:6,name:"街入口",enemy:[5,6],scout:5,next:[7]},
    {id:7,name:"街中",enemy:[7],scout:6,next:[8]},
    {id:8,name:"ボス戦",enemy:[8,9,10],scout:10,next:[]}
  ],

  currentNodeId:1, // 最初の場所

  start(){
    UI.log("ストーリー開始！マップを移動しながら冒険しよう！");
    this.showCurrentNode();
  },

  showCurrentNode(){
    let node = this.map.find(n=>n.id===this.currentNodeId);
    let html = `<b>${node.name}</b><br>`;
    if(node.enemy){
      html += `敵が待っている！<button onclick="Story.battle()">挑む</button><br>`;
    } else {
      html += "ここは安全だ<br>";
    }
    if(node.next.length>0){
      html += "移動可能:<br>";
      node.next.forEach(nid=>{
        let nextNode = this.map.find(x=>x.id===nid);
        html += `<button onclick="Story.move(${nid})">${nextNode.name}</button>`;
      });
    } else {
      html += "これ以上進めない。冒険終了！";
    }
    UI.log(html);
  },

  move(nid){
    this.currentNodeId = nid;
    this.showCurrentNode();
  },

  battle(){
    let node = this.map.find(n=>n.id===this.currentNodeId);
    if(!node.enemy) return;

    let enemyId = node.enemy[Math.floor(Math.random()*node.enemy.length)];
    let enemy = getMonster(enemyId);
    Battle.start(enemy);

    // 勝利ならスカウト可能
    if(enemy.hp <=0 && node.scout){
      let scoutMonster = getMonster(node.scout);
      GAME.party.push(scoutMonster);
      UI.log(`${scoutMonster.name}をスカウトした！`);
    }
  }

};