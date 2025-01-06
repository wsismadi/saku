var web={
model:{
table:{id:'web',data:[
  {id:1,nama:"web1000",isi:1,posisi:'About',author:'admin'},
  {id:1,nama:"web2",isi:1,posisi:'About',author:'admin'},
  {id:1,nama:"web1",isi:1,posisi:'About',author:'admin'},
  {id:1,nama:"web1",isi:1,posisi:'Post',author:'admin'},
  {id:1,nama:"web1",isi:1,posisi:'Post',author:'admin'},
  {id:1,nama:"web1",isi:1,posisi:'Post',author:'admin'},
  {id:1,nama:"web1",isi:1,posisi:'Post',author:'admin'},
]},
tipe:[
  {id:"id",nama:"label",arr:"1,2,5",info:'SS',perlu:'0'},
  {id:"nama",nama:"text",arr:'1,2,5',info:'wajib diisi',perlu:'0'},
  {id:"isi",nama:"textarea",arr:'1,2',info:'isi apa ajah',perlu:'0'},
  {id:"id",nama:"option",arr:'1,2,5',info:'isi apa ajah',perlu:'0'},
],},

controller:{
view:function(){
  table.data=web.model.table.data;
  // log(d.model.edit.input.tipe);
  log(table.tipe);
  log(web.model.tipe);

  table.tipe=web.model.tipe;
  log(table.tipe);

  // d.controller.view();

  d.gebi('content').innerHTML=d.view.view(d.model.view);

  log(table.tipe);


},},
}; // end menu
