

function fullscreen(div){
    if (document.fullscreenElement)
    document.exitFullscreen()
else
     document.getElementById(div.id).requestFullscreen(); 
};

window.addEventListener("scroll",function(event){
var scroll = this.scrollY; 
if(scroll<50){
    document.getElementById("title").style.marginLeft="420px";
    document.getElementById("title").style.transform = 'rotate(0deg)';
    document.getElementById("title").style.marginTop="-100px"; 

}
else{
    document.getElementById("title").style.marginLeft="-10%";
    document.getElementById("title").style.transform = 'rotate(90deg)';
    document.getElementById("title").style.marginTop="250px"; 
        }
}); 