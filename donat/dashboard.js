var dashboard={
model:{
  table:{id:'dashboard',data:[
  {id:1,induk:0,nama:"Master",isi:1,icon:"setting",url:"menu.controller.menu(1)"},
  {id:2,induk:1,nama:"Pesan",isi:10,icon:"envelope",url:"mod.js?mod/load"},
  {id:3,induk:1,nama:"Menu",isi:20,icon:"menu",url:"mod.js?mod/load"},
  {id:4,induk:1,nama:"Users",isi:30,icon:"person",url:"mod.js?mod/load"},
  {id:4,induk:1,nama:"Setting",isi:40,icon:"setting",url:"mod.js?mod/load"},
  ]},
},
view:{
dashboard:function(arr){
out=`
<div class="row shadow">
<div id="card" class="col-1-1">  ${d.view.card(arr)} </div>
</div>
<div class="row shadow">
<div id="progres" class="col-1-1">  ${d.view.progress(arr)} </div>
</div>
<div class="row shadow">
<div id="pie" class="col-1-1">  ${d.view.pie(arr)} </div>
</div>

`;
return out;

},
},
controller:{
dashboard:function(i){ // data=JSON.parse(d.getls('data'));
data=dashboard.model.table.data;
const node = data.filter(e => e.induk == i);
arr={}
arr.data=node;
d.gebi('content').innerHTML=dashboard.view.dashboard(arr);
// d.modal('dashboard')

},

}, // edn controller
service:{},

}; // end menu
