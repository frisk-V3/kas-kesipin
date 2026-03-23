const GAME = {
  party: [],
  story: 0
};

function getMonster(id){
  return JSON.parse(JSON.stringify(DATA.monsters.find(m=>m.id===id)));
}