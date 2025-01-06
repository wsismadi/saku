var param={
model:{
table:{id:'param',data:[
  {id:1,nama:"param1",isi:1},
  {id:2,nama:"param2",isi:2},
]},
tipe:[
  {id:"id",nama:"option",arr:'1,2,5',info:'',perlu:'0'},
  {id:"nama",nama:"text",arr:'1,2,5',info:'wajib diisi',perlu:'0'},
  {id:"isi",nama:"textarea",arr:'1,2',info:'isi apa ajah',perlu:'1'},
],},
controller:{
view:function(){
  table.data=param.model.table.data;
  log(d.model.edit.input.tipe);
  d.model.edit.input.tipe=param.model.tipe;
  d.controller.view();
},},
}; // end menu

var pesan={
model:{
table:{id:'pesan',data:[
  {id:1,nama:"pesan1",isi:1},
  {id:2,nama:"pesan2",isi:2},
]},},
}; // end menu

var setting={
model:{
table:{id:'setting',data:[
  {id:1,nama:"setting1",isi:1},
  {id:2,nama:"setting2",isi:2},
]},},
}; // end menu

// donat('pesan');
// db['pesan'].model.nah='11';
// var {model,view,controller} = pesan;
// model.id='baik'
// log(model)
// log(pesan.model.id)
// log(pesan.model.nah)
// log(pesan.model.table.id)
