//UI
const musiccontainer=document.getElementById('music-container');

const title=document.getElementById('title');
const progresscontainer=document.getElementById('progress-container'),
      progress=document.getElementById('progress');

const audio=document.getElementById('audio');
const cover=document.getElementById('cover');

const playbtn=document.getElementById('play'),
      prevbtn=document.getElementById('previous'),
      nextbtn=document.getElementById('next');


//Song title
const songs=['sample1','sample2','sample3'];
let songindex=0;
loadsong(songs[songindex]);
//load songs & get song titles
function loadsong(song){
    title.innerText=song;
    audio.src=`music/${song}.mp3`;
    cover.src=`img/${song}.jpg`;
}

//Event Listener
playbtn.addEventListener('click',()=>{
    // console.log('hey');
    const isplaying=musiccontainer.classList.contains('play');
    if(isplaying){
        pausesong();
    }else{
        playsong();
    }
});
//Play Song
function playsong(){
    musiccontainer.classList.add('play');
    playbtn.querySelector('i.fas').classList.remove('fa-play');
    playbtn.querySelector('i.fas').classList.add('fa-pause');
    audio.play();
}
//Pause Song
function pausesong(){
    musiccontainer.classList.remove('play');
    playbtn.querySelector('i.fas').classList.add('fa-play');
    playbtn.querySelector('i.fas').classList.remove('fa-pause');
    audio.pause();
}
//Change Song
prevbtn.addEventListener('click',previoussong);
nextbtn.addEventListener('click',nextsong);

function previoussong(){
    songindex--;
    if(songindex < 0){
        songindex=songs.length-1;
    }
    loadsong(songs[songindex]);
    playsong();
}
function nextsong(){
    songindex++;
    if(songindex > songs.length-1){
        songindex=0;
    }
    loadsong(songs[songindex]);
    playsong();
}
function updateprogress(e){
    //Method1
    // progress.style.width=(audio.currentTime/audio.duration)*100 +"%";
    //Method2
    const {duration,currentTime}=e.target;
    // console.log(currentTime);
    const progresspercent=(currentTime/duration)*100;
    progress.style.width=`${progresspercent}%`;
}
audio.addEventListener('timeupdate',updateprogress);

//Set Progress Bar
function setprogress(e){
    const width=this.clientWidth;
    //const width=e.target.clientWidth;
    const clickx=e.offsetX;
    const duration=audio.duration;
    audio.currentTime=(clickx/width)*duration;
}

progresscontainer.addEventListener('click',setprogress);

audio.addEventListener('ended',nextsong);