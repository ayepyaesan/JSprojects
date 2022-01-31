const days=document.getElementById('days'),
      hours=document.getElementById('hours'),
      minutes=document.getElementById('minutes'),
      seconds=document.getElementById('seconds'),
      countdown=document.getElementById('countdown');

const year=document.getElementById('year');
const loading=document.getElementById('loading');

const currentyear=new Date().getFullYear();
// console.log(currentyear);
const newyeartime=new Date(`January  01 ${currentyear+1} 00:00:00`);
// console.log(newyeartime);
year.innerText=currentyear+1;

function updatecountdown(){
    const currenttime=new Date();
    const diff=newyeartime-currenttime;
    const d=Math.floor(diff/1000/60/60/24);
    const h=Math.floor(diff/1000/60/60) % 24;
    const m=Math.floor(diff/1000/60) % 60;
    const s=Math.floor(diff/1000) % 60;
    days.innerText=d;
    hours.innerText=h < 10 ? "0"+h : h;
    minutes.innerText=m < 10 ? "0"+m : m;
    seconds.innerText=s < 10 ? "0"+s : s;
}
// show spinner before countdown
setTimeout(() =>{
    loading.remove();
    countdown.style.display="flex";
},1000);
setInterval(updatecountdown,1000);