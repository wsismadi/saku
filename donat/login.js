var login={
model:{
data:{email:'sa',pin:'123'},
signform:{
id:'signform',
input:{data:{email:'',pin:''},tipe:[ {id:"pin",nama:"password",arr:'1,2'},],},
button:{data:[{id:1,nama:"Signin",icon:"person",url:"login.controller.signin()"},]},},
profile:{
id:'profile',
avatar:['man',2],
username:'Wawan',
input:{data:{email:'',pin:''},tipe:[ {id:"pin",nama:"password",arr:'1,2'},],},
button:{data:[
{id:1,nama:"Signout",icon:"person",url:"login.controller.signout()"},
{id:1,nama:"Update",icon:"pen",url:"login.controller.signin()"},
]},
card:{data:[
{id:1,nama:"Pesan",isi:"2",icon:"envelope",url:"d.controller.view();"},
{id:1,nama:"Setting",isi:"2",icon:"setting",url:"d.controller.view();"},
]},
}, //end profile

}, //end model

view:{
signform:function(arr){
return `
<div id="login" class="show row login">
<div class="shadow" style="max-width:400px; padding: 20px auto; margin: 0  auto;">
<h1>Login</h1>
<div class=""> ${d.view.input(arr.input)} </div>
<div class=""> ${d.view.button(arr.button)} </div></div></div>`;
},
dashboard:function(arr){return arr},
grupmenu:function(arr){return arr},
menu:function(arr){return arr},
profile:function(arr){
  // <img id="avatar" src="${arr.avatar}" alt="user avatar" class="user-avatar img">
// avatar=avatar.controller.me('avt',2);

avt=avatar.view.svg(avatar.view.man(avatar.model.man[2]));

  out=`
  <div id="profile" class="row shadow">
  <div id="profile" class="col-1-3">
  <div id="avt" class="user-avatar img"> ${avt} </div>
  <span class="username" >Welcome, ${arr.username}</span>
  <div class=""> ${d.view.input(arr.input)} </div>
  <div class=""> ${d.view.button(arr.button)} </div>
  </div>
  <div id="card" class="col-2-3"> ${d.view.card(arr.card)} </div>
  </div>
  `;
  return out;

},
}, //end view

controller:{
login:function(){data=d.getls('data'); if(data) {this.profile();} else { this.signform();}},
signform:function(){
d.close('menu');
d.gebi('main').classList.add("login");
d.gebi('content').innerHTML=login.view.signform(login.model.signform);
},

signin:function(){res=login.model.data;
  if (res){ d.setls('data',res); this.login();} else { d.info('Login Gagal');}
},

signout:function(){d.remls('data');this.login();},

dashboard:function(){
data=JSON.parse(d.getls('data'));

d.modal(d.getls('data'))
d.modal(data.menu)
d.model.profile.card.data=data.menu;

arr=d.model.profile;
d.gebi('content').innerHTML=d.view.profile(arr);
},
grupmenu:function(){  data=JSON.parse(d.getls('data'));
const node = data.menu.filter(e => e.induk === '0');
d.model.card.data=node;

out=`
<div id="profile" class="row shadow">
<div id="card" class="col-1-1">  ${d.view.card(d.model.card)} </div>
</div>
`;
d.gebi('content').innerHTML=out;},

menu:function(){data=JSON.parse(d.getls('data'));
const node = data.menu.filter(e => e.induk === i);
d.model.card.data=node;
out=`
<div id="profile" class="row shadow">
<div id="card" class="col-1-1">  ${d.view.card(d.model.card)} </div>
</div>
`;
d.gebi('content').innerHTML=out;},
profile:function(){
d.open('menu');
d.gebi('main').classList.remove("login");

d.gebi('content').innerHTML=login.view.profile(login.model.profile);
},
}, //end controller

service:{
login:function(){data=d.getls('data');
if(data) {this.profile();} else { this.signform();}
},

signin:function(){   email=d.gebi('email').value;
pin=d.gebi('email').value;
param={mod:"login",data:{email:email,pin:pin}}
d.api.req(param,callback);
function callback(json){
// d.modal(json)

res=JSON.parse(json)

if (res.login.length>0){
d.setls('data',res);
d.login.login();
}
else {
d.info('Login Gagal')
}
// login.app.js.login();
}},
signout:function(){d.remls('data');this.login();},
signform:function(){
d.close('menu');
d.gebi('main').classList.add("login");
d.gebi('content').innerHTML=login.view.signform(login.model.signform);
},

dashboard:function(){
data=JSON.parse(d.getls('data'));

d.modal(d.getls('data'))
d.modal(data.menu)
d.model.profile.card.data=data.menu;

arr=d.model.profile;
d.gebi('content').innerHTML=d.view.profile(arr);
},
grupmenu:function(){  data=JSON.parse(d.getls('data'));
const node = data.menu.filter(e => e.induk === '0');
d.model.card.data=node;

out=`
<div id="profile" class="row shadow">
<div id="card" class="col-1-1">  ${d.view.card(d.model.card)} </div>
</div>
`;
d.gebi('content').innerHTML=out;},
menu:function(){data=JSON.parse(d.getls('data'));
const node = data.menu.filter(e => e.induk === i);
d.model.card.data=node;
out=`
<div id="profile" class="row shadow">
<div id="card" class="col-1-1">  ${d.view.card(d.model.card)} </div>
</div>
`;
d.gebi('content').innerHTML=out;},
profile:function(){
d.open('menu');
d.gebi('main').classList.remove("login");

data=JSON.parse(d.getls('data'));

const node = data.menu.filter(e => e.tipe === 'p');
d.model.profile.card.data=node;
arr=d.model.profile;
d.gebi('content').innerHTML=d.view.profile(arr);
},
}, //end service

}; // end login
