let timeLeft=600;
const timerElement=document.getElementById("time");
const countdown=setInterval(function(){
    let minutes=Math.floor(timeLeft/60);
    let seconds=timeLeft%60;
    timerElement.textContent=`${minutes}:${seconds<10?"0"+seconds:seconds}`;
    timeLeft--;
    if(timeLeft<0) {
      clearInterval(countdown);
      alert("Time up!");
      const options=document.querySelectorAll('input[type="radio"]');
      options.forEach(option=>option.disabled=true);
    }
},1000);
const crctans=["a","a","a","a","b","a","d","a","c","b","d","d","no-correct","c","c"];
function calScore() {
  let score=0;
  for(let i=0;i<crctans.length;i++) {
    const selected=document.querySelector('input[name="options${i+1}"]:checked');
    if(selected && selected.value===crctans[i]) {
      score++;
    }
  }
  alert("You scored ${score} out of ${crctans.length}");
  const options=document.querySelectorAll('input[type="radio"]');
  options.forEach(option=>option.disabled=true);
}
document.getElementById("submit").addEventListener("click",function () {
    clearInterval(countdown);
    calScore();
});


