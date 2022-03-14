// let likeCounter = counter1;
var counter1=0;
likeCount=[0,0,0,0,0];
function likePhoto(num){
likeCount[num]++;
console.log(likeCount);
document.getElementById("likeCount" + num).innerHTML = likeCount[num];
}
var user = {
'name':'Julian',
'name_last':'Martinez',
'followers':['Sam','Tim','Antoine','Louis','Jeremiah'],
'profile_pic':'http://pds.exblog.jp/pds/1/201003/22/90/a0126590_0331777.jpg',
'bio':'Cat Doge go dooooge'
}
setTimeout(function(){document.getElementById('bio').innerHTML = user.bio;}, 3000);
setTimeout(function(){ document.getElementById("name").innerHTML = user.name;}, 3000);
setTimeout(function(){ document.getElementById("name_last").innerHTML = user.name_last;}, 3000);
setTimeout(function(){ document.getElementById("followers").innerHTML = "Followers: " + user.followers.length;}, 3000);
setTimeout(function(){ $("#profile_pic").attr("src", user.profile_pic);}, 3000);
$("#button2").on("click", { buttonNumber : 2 }, increaseLikes)
function increaseLikes(event) {
   // event.data.buttonNumber would have access to the value 2 here
   }
