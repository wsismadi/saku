
var menu={
model:{
  table:{id:'menu',data:[
  {id:1,induk:0,nama:"Master",isi:1,icon:"setting",url:"menu.controller.menu(1)"},
  {id:2,induk:1,nama:"Dashboard",isi:1,icon:"house",url:"d.url('dashboard')"},
  {id:3,induk:1,nama:"Menu",isi:2,icon:"menu",url:"d.url('menu')"},
  {id:4,induk:1,nama:"Users",isi:3,icon:"person",url:"d.url('users')"},
  {id:5,induk:1,nama:"Akses",isi:4,icon:"lock",url:"d.url('akses')"},
  {id:6,induk:1,nama:"Setting",isi:5,icon:"setting",url:"d.url('setting')"},
  {id:7,induk:1,nama:"Param",isi:6,icon:"setting",url:"d.url('param')"},
  {id:8,induk:1,nama:"Pesan",isi:7,icon:"envelope",url:"d.url('pesan')"},
  ]},
},
view:{
menu:function(arr){
out=`
<div class="row shadow">
<div id="card" class="col-1-1">  ${d.view.card(arr)} </div>
</div>`;
return out;``
},
},
controller:{
menu:function(i){ // data=JSON.parse(d.getls('data'));
data=menu.model.table.data;
const node = data.filter(e => e.induk == i);
arr={}
arr.data=node;
d.gebi('content').innerHTML=menu.view.menu(arr);
},
},
service:{},
nah:function(){
table.data=menu.model.menu.data
d.controller.view();
}
}; // end menu
