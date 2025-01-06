
var akses={
model:{
  table:{id:'table',rpp:10,page:1,fld:'id,nama',data:[
    {id:1,induk:0,nama:"sa",c:"1,2,3,4,5,6,7,8,9,10",r:"1,2,3,4,5,6,7,8,9,10",u:"1,2,3,4,5,6,7,8,9,10",d:"1,2,3,4,5,6,7,8,9,10"},
    {id:2,induk:0,nama:"user",c:"1,2,3,4,5,6,7,8,9,10",r:"1,2,3,4,5,6,7,8,9,10",u:"1,2,3,4,5,6,7,8,9,10",d:"1,2,3,4,5,6,7,8,9,10"},
  ],
  },
},

view:{
akses:function(arr){
out=`
<div class="row shadow">
<div id="card" class="col-1-1">  ${d.view.card(arr)} </div>
</div>`;
return out;
},
},

controller:{

editform:function(i){ // data=JSON.parse(d.getls('data'));


},

    menu:function(i){ // data=JSON.parse(d.getls('data'));
data=menu.model.menu.data;
const node = data.filter(e => e.induk == i);
arr={}
arr.data=node;
d.gebi('content').innerHTML=menu.view.menu(arr);
},
},

service:{
view:function(i){
log(data)
d.model.view.datatable=akses.model.table;
d.controller.view();
},

},







CheckAll:function(el,o) {
var c=document.getElementsByName(o);
for (var i=0;i<c.length;i++) c[i].checked = el.checked? true:false ;
}, // end CheckAll

form:function(){

out = `<div  class="row">
<table class="table"><thead><tr>
<th scope="col" >id</th>
<th scope="col" >keterangan</th>
<th scope="col"><input type=checkbox  name='cs' onClick=checkAll(this,'cc') >Create</th>
<th scope="col"><input type=checkbox  name='rs' onClick=checkAll(this,'cr') >Read</th>
<th scope="col"><input type=checkbox  name='us' onClick=checkAll(this,'cu') >Update</th>
<th scope="col"><input type=checkbox  name='ds' onClick=checkAll(this,'cd') >Delete</th>
</tr></thead><tbody>`;



var vc0= akses.model.table.data[0].c;
var vr0= akses.model.table.data[0].r;
var vu0= akses.model.table.data[0].u;
var vd0= akses.model.table.data[0].d;

var vc= vc0.split(',');
var vr= vr0.split(',');
var vu= vu0.split(',');
var vd= vd0.split(',');

var   judul=menu.model.table.data;
var e=1;
for (key in judul){
for (i in vc ){ if(vc[i] == judul[key].id ){var ci = 'checked=checked'; break;} else { ci = '';}  }
for (i in vr ){ if(vr[i] == judul[key].id ){var ri = 'checked=checked'; break;} else { ri = '';}  }
for (i in vu ){ if(vu[i] == judul[key].id ){var ui = 'checked=checked'; break;} else { ui = '';}  }
for (i in vd ){ if(vd[i] == judul[key].id ){var di = 'checked=checked'; break;} else { di = '';}  }

out+= `<tr onMouseOver=this.bgColor='#F4F4F6' onMouseOut=this.bgColor='white' >
<td align='right'>${judul[key].id}</td>
<td align='left'>${judul[key].nama} </td>
<td align='left'><input type=checkbox name='cc' value=${judul[key].id} id=chkc${e} onclick=getVal('c') ${ci} ></td>
<td align='left'><input type=checkbox name='cr' value=${judul[key].id} id=chkr${e} onclick=getVal('r') ${ri} ></td>
<td align='left'><input type=checkbox name='cu' value=${judul[key].id} id=chku${e} onclick=getVal('u') ${ui} ></td>
<td align='left'><input type=checkbox name='cd' value=${judul[key].id} id=chkd${e} onclick=getVal('d') ${di} ></td>
</tr>`;
e++;
}
out+= "</tbody></table></div>";
d.gebi('ext').innerHTML=out;
}, // end form

getVal:function(x){
var c=document.getElementsByName('chk'+x);
debug(x);
var data=[];
for (var i=0;i<c.length;i++) c[i].checked? data[data.length]=c[i].value:null;
data.join(",");
debug(data);
},

checkbox:function(id,arr){
el=d.gebi('el-'+id);
val=d.gebi(id).value;

var vc= val.split(',');
out='<input type="text" name="'+id+'" id="'+id+'" value="'+val+'">';
for(i in arr){
if(vc.includes(arr[i])){var ci = 'checked=checked';} else { ci = '';}
out += '<input type="checkbox" id="chk'+id+i+'" name="chk[]" value="'+arr[i]+'" onclick=getVal("'+id+'") '+ci+' >';
out += '<label for="chk'+id+i+'">'+arr[i]+'</label><br>';
}
el.innerHTML=out;

},


}; // end menu

d.controller.callback=function(arr){
// if(arr=='edit,akses') {akses.form();} else {d.modal(arr);}
}

d.callback=function(arr){
if(table.id=='akses'){ d.modal(arr[1]);}
}
