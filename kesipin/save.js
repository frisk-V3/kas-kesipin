const Save = {
save(){
  localStorage.setItem("keshipin",JSON.stringify(GAME));
  UI.log("セーブ完了");
},
load(){
  let data = localStorage.getItem("keshipin");
  if(data){ Object.assign(GAME,JSON.parse(data)); UI.log("ロード完了"); }
}
};