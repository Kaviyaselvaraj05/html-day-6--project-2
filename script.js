const button=document.querySelector("button");
const body=document.querySelector("body");
const color=["violet","indigo","blue","green","yellow","orange","red","pink","green","skyblue","silver","maaroon","lavender","peach"];
document.addEventListener('click',function(){
  body.style.backgroundColor=color[Math.floor(Math.random()*color.length)];
});

    