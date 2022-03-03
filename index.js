let start=document.querySelector(".start");
let stop=document.querySelector(".stop");
let reset=document.querySelector(".reset");
let stopwatch=document.querySelector(".stopwatch");
let stopTheInterval;
let timeElapsedAlready=0,startTime,currentTime;
console.log("started");
function convert(currentTime){
  var min=Math.floor(currentTime/60000).toString();
  currentTime=currentTime%60000;
  var sec=Math.floor(currentTime/1000).toString();
  currentTime=currentTime%1000;
  var ms=currentTime.toString();
  min=min.padStart(2,"0");
  sec=sec.padStart(2,"0");
  ms=ms.padStart(3,"0");
  console.log(min+':'+sec+':'+ms);
  return `${min}:${sec}:${ms}`;
}
start.addEventListener("click",()=>{
  startTime=Date.now();
  stopTheInterval=setInterval(()=>{
    currentTime=Date.now()-startTime+timeElapsedAlready;
    stopwatch.innerText=convert(currentTime);
  },1);
});

stop.addEventListener('click',()=>{
  timeElapsedAlready=currentTime;
  clearInterval(stopTheInterval);
})
reset.addEventListener('click',()=>{
  timeElapsedAlready=0;
  currentTime=0;
  clearInterval(stopTheInterval);
  stopwatch.innerText="00:00:000";
})
