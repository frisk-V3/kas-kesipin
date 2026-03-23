const DATA = {
monsters: [
  {id:1,name:"スピード消し",type:"speed",hp:60,atk:20,spd:40},
  {id:2,name:"安定消し",type:"balance",hp:80,atk:25,spd:20},
  {id:3,name:"攻撃消し",type:"attack",hp:50,atk:40,spd:15},
  {id:4,name:"炎消し",type:"fire",hp:70,atk:35,spd:20},
  {id:5,name:"水消し",type:"water",hp:75,atk:30,spd:25},
  {id:6,name:"風消し",type:"wind",hp:60,atk:28,spd:35},
  {id:7,name:"雷消し",type:"thunder",hp:65,atk:32,spd:30},
  {id:8,name:"地消し",type:"earth",hp:85,atk:22,spd:18},
  {id:9,name:"光消し",type:"light",hp:55,atk:38,spd:28},
  {id:10,name:"闇消し",type:"dark",hp:50,atk:42,spd:20}
],
fusion: [
  // ここに先ほどの100行をコピー
  {a:1,b:2,result:4},{a:1,b:3,result:5},{a:1,b:4,result:6},{a:1,b:5,result:7},{a:1,b:6,result:8},
  {a:1,b:7,result:9},{a:1,b:8,result:10},{a:1,b:9,result:2},{a:1,b:10,result:3},{a:2,b:3,result:6},
  {a:2,b:4,result:7},{a:2,b:5,result:8},{a:2,b:6,result:9},{a:2,b:7,result:10},{a:2,b:8,result:1},
  {a:2,b:9,result:3},{a:2,b:10,result:4},{a:3,b:4,result:8},{a:3,b:5,result:9},{a:3,b:6,result:10},
  {a:3,b:7,result:1},{a:3,b:8,result:2},{a:3,b:9,result:4},{a:3,b:10,result:5},{a:4,b:5,result:10},
  {a:4,b:6,result:9},{a:4,b:7,result:8},{a:4,b:8,result:7},{a:4,b:9,result:6},{a:4,b:10,result:5},
  {a:5,b:6,result:4},{a:5,b:7,result:5},{a:5,b:8,result:6},{a:5,b:9,result:7},{a:5,b:10,result:8},
  {a:6,b:7,result:9},{a:6,b:8,result:10},{a:6,b:9,result:1},{a:6,b:10,result:2},{a:7,b:8,result:3},
  {a:7,b:9,result:4},{a:7,b:10,result:5},{a:8,b:9,result:6},{a:8,b:10,result:7},{a:9,b:10,result:8},
  {a:1,b:2,result:5},{a:1,b:3,result:6},{a:1,b:4,result:7},{a:1,b:5,result:8},{a:1,b:6,result:9},
  {a:1,b:7,result:10},{a:1,b:8,result:1},{a:1,b:9,result:2},{a:1,b:10,result:3},{a:2,b:3,result:7},
  {a:2,b:4,result:8},{a:2,b:5,result:9},{a:2,b:6,result:10},{a:2,b:7,result:1},{a:2,b:8,result:2},
  {a:2,b:9,result:3},{a:2,b:10,result:4},{a:3,b:4,result:9},{a:3,b:5,result:10},{a:3,b:6,result:1},
  {a:3,b:7,result:2},{a:3,b:8,result:3},{a:3,b:9,result:4},{a:3,b:10,result:5},{a:4,b:5,result:1},
  {a:4,b:6,result:2},{a:4,b:7,result:3},{a:4,b:8,result:4},{a:4,b:9,result:5},{a:4,b:10,result:6},
  {a:5,b:6,result:7},{a:5,b:7,result:8},{a:5,b:8,result:9},{a:5,b:9,result:10},{a:5,b:10,result:1},
  {a:6,b:7,result:2},{a:6,b:8,result:3},{a:6,b:9,result:4},{a:6,b:10,result:5},{a:7,b:8,result:6},
  {a:7,b:9,result:7},{a:7,b:10,result:8},{a:8,b:9,result:9},{a:8,b:10,result:10},{a:9,b:10,result:1},
  {a:1,b:2,result:6},{a:1,b:3,result:7},{a:1,b:4,result:8},{a:1,b:5,result:9},{a:1,b:6,result:10},
  {a:1,b:7,result:1},{a:1,b:8,result:2},{a:1,b:9,result:3},{a:1,b:10,result:4},{a:2,b:3,result:8}
]
};