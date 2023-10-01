//definition variables
let hour = 0;
let minute = 0;
let second = 0;
let timer = null;
function RestartTimer(){
    clearInterval(timer);
}
//starting the timer and display it on the web page
export default function Timer(){
    const hour_element =  document.querySelector(".hour");
    const minute_element = document.querySelector(".minute");
    const second_element = document.querySelector(".second");
    if(timer){
        RestartTimer();
    }
    timer = setInterval(()=>{
        second++;
        if(second==60){
            minute++;
            second=0;
            if(minute==60){
                hour++;
                minute=0;
            }
        }
        hour_element.innerHTML = `${hour<10 ? `0${hour}` : hour}`;
        minute_element.innerHTML = `${minute<10 ? `0${minute}` : minute}`;
        second_element.innerHTML = `${second<10 ? `0${second}` : second}`
    },1000);
}
export {RestartTimer};