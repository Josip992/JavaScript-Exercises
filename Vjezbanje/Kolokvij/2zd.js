let myLink = document.querySelector('#myLink');
myLink.href = 'https://www.example.com';
--------------------------------------------------
<div onmouseover="mOver(this)" onmouseout="mOut(this)" 
style="width:120px;height:20px;padding:40px;">
Mouse Over Me</div>

<script>
function mOver(obj) {
  obj.innerHTML = "Thank You"
}

function mOut(obj) {
  obj.innerHTML = "Mouse Over Me"
}
</script>

-------------------------------------------------------

<h2 onclick="this.innerHTML='Ooops!'">Click on this text!</h2>

----------------------------------------------------------

<script>
function mymessage() {
  alert("This message was triggered from the onload event");
}
</script>
<body onload="mymessage()">
</body>

-----------------------------------------------------

window.onload = function() {
    document.body.style.backgroundColor = "red";
  };
----------------------------------------------------------------

document.getElementById("demo").innerHTML= "Hello";

document.getElementsByTagName("p")[0].innerHTML= "Hello";


document.getElementsByClassName("test")[0].innerHTML= "Hello";

document.getElementById("image").src = "pic_mountain.jpg";

document.getElementById("myText").value = "Have a nice day!";

document.getElementById("demo").style.color = "red";

document.getElementById("demo").style.fontSize = "40px";



function promijeniPozadinu(){
    document.body.style.backgroundColor = "red"
}

let p = document.getElementsByTagName('p')
for( i = 0; i < p.length; i++){
    p[i].style.fontSize = "50px"
}