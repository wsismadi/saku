
var users={
model:{
  table:{id:'users',data:[
  {id:1,induk:0,nama:"admin",email:'sa',pin:"123",akses:"sa"},
  {id:2,induk:0,nama:"user",email:'user',pin:"123",akses:"user"},
  ]},
data:{email:'sa',pin:'123'},

profile:{
id:'profile',
avatar:['man',2],
username:'Wawan',
input:{data:{email:'',pin:''},tipe:[ {id:"pin",nama:"password",arr:'1,2'},],},
button:{data:[
{id:1,nama:"Signout",icon:"person",url:"users.controller.signout()"},
{id:1,nama:"Update",icon:"pen",url:"users.controller.signin()"},
]},
card:{id:"card", data:[
{id:1,nama:"Pesan",isi:"2",icon:"envelope",url:"d.url('pesan');"},
{id:2,nama:"Setting",isi:"2",icon:"setting",url:"d.url('setting');"},
{id:3,nama:"Web",isi:"2",icon:"lock",url:"d.url('web');"},
]},
}, //end profile

signform:{
id:'signform',
input:{data:{email:'',pin:''},tipe:[ {id:"pin",nama:"password",arr:'1,2'},],},
button:{data:[{id:1,nama:"Signin",icon:"person",url:"users.controller.signin()"},]},
}, // end signform

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
d.gebi('content').innerHTML=users.view.signform(users.model.signform);
},

signin:function(){res=users.model.data;
if (res){ d.setls('data',res); this.login();} else { d.info('Login Gagal');}
},

signout:function(){d.remls('data');this.login();},

profile:function(){
d.open('menu');
d.gebi('main').classList.remove("login");
// console.log(pathData);
d.gebi('content').innerHTML=users.view.profile(users.model.profile);
// avatar.controller.view();
},
}, //end controller


service:{}, //end service

}; // end login
