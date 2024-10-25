let clock=document.getElementsByClassName("clock")[0];

function fetchTime(){
const time=new Date();
let hour=time.getHours();
let minute=time.getMinutes();
let second=time.getSeconds();
hour=updateTime(hour);
minute=updateTime(minute);
second=updateTime(second);

clock.innerHTML=hour+" : "+ minute+" : "+ second;
}

function updateTime(k){
    if(k<10)
        return "0"+k;
    else
        return k;
}
setInterval(fetchTime,1000);