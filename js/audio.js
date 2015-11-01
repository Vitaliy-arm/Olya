var audio = document.getElementById("play");
var all_li = document.getElementsByTagName("li");


for(i=0;i<all_li.length;i++){
    all_li[i].onclick=function(){
        audio.src=this.id;
        audio.play();
    }
}

