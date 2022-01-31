//UI
const toggle=document.getElementById('toggle');
const open=document.getElementById('open');
const close=document.getElementById('close');

const modal=document.getElementById('modal');

//Add Event Listener
toggle.addEventListener('click',()=>{
    document.body.classList.toggle('show-nav');
});
//Show Modal
open.addEventListener('click',()=>{
    modal.classList.add('show-modal');
});
//Hide Modal
close.addEventListener('click',()=>{
    modal.classList.remove('show-modal');
});
//Show Modal by clicking opacity
//Method 1
// window.addEventListener('click',function(e){
//     if(e.target===modal){
//         modal.classList.remove('show-modal');
//     }
// })
//Method 2
window.addEventListener('click',(e)=>e.target===modal ? modal.classList.remove('show-modal'):false);

