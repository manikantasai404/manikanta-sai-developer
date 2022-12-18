var div=document.createElement("div");
div.id="preload",
div.className="preload",
div.innerHTML=`<div class="sk-folding-cube"><div class="sk-cube1 sk-cube"></div><div class="sk-cube2 sk-cube"></div><div class="sk-cube4 sk-cube"></div><div class="sk-cube3 sk-cube"></div></div>`,
document.body.insertBefore(div,document.body.firstChild),
window.onload=function(){
    document.getElementById("preload").classList.add("off")
};