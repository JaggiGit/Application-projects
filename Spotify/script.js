let audioElement= new Audio('songs/1.mp3');
let songIndex=0;
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar') ;
let gif=document.getElementById('gif') ;
let songItems=Array.from(document.getElementsByClassName('songItem')) ;

let songs =[
{songName:'Dhoke_Pyaar__B__Praak.mp3',filePath:'songs/1.mp3',coverPath:'covers/1.jpg'},
{songName:'Coka_2_0_Liger_128kb __mp3',filePath:'songs/1.mp3',coverPath:'covers/2.jpg'},
{songName:'Jaana-Stebin_Ben_kb ___.mp3',filePath:'songs/1.mp3',coverPath:'covers/3.jpg'},
{songName:'Kesariya_Brahmtra.___kb mp3',filePath:'songs/1.mp3',coverPath:'covers/4.jpg'},
{songName:'Life_is_good_8_Saal____mp3',filePath:'songs/1.mp3',coverPath:'covers/5.jpg'},
{songName:'Mashooka__Rakulpret___mp3',filePath:'songs/1.mp3',coverPath:'covers/6.jpg'},
{songName:'Pain_8__Saal_emiway__.mp3',filePath:'songs/1.mp3',coverPath:'covers/7.jpg'}
] ;

songItems.forEach((element,i) => {
 
  element.getElementsByTagName('img')[0].src=songs[i].coverPath ;
  element.getElementsByClassName('songName')[0].innerText =songs[i].songName ;
});

masterPlay.addEventListener('click',()=>{
  if(audioElement.paused || audioElement.currentTime <=0)
  {
     audioElement.play();
     masterPlay.classList.remove('fa-circle-play');
     masterPlay.classList.add('fa-circle-pause') ;
     gif.style.opacity=1 ;
}
else{
    audioElement.pause();
    masterPlay.classList.remove('fa-circle-pause');
    masterPlay.classList.add('fa-circle-play') ;
    gif.style.opacity=0 ;
}

});

audioElement.addEventListener('timeupdate',()=>{
progress=parseInt((audioElement.currentTime/audioElement.duration)*100) ;
myProgressBar.value=progress ;
});

myProgressBar.addEventListener('change',()=>{
  audioElement.currentTime=myProgressBar.value*audioElement.duration/100 ;

});

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
   element.addEventListener('click',(e)=>{
    console.log(e.target) ;
    e.target.classList.remove('fa-play-circle');
    e.target.classList.add('fa-pause-circle');
    
   })
})