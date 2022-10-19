let gelenisim = prompt("hoş geldin","adın ne?");
var gidenisim = document.getElementById("isim");
gidenisim.innerHTML = gelenisim;
var saat = document.getElementById("saat");
window.onload = startTime;

function startTime()
{
 var today=new Date();
 var day=today.getDay();
 var hour=today.getHours();
 var minute=today.getMinutes();
 var seconds=today.getSeconds();

 switch(day){
    case 1:
        day = "Pazartesi";
    break;
    case 2:
        day = "Salı";
    break;
    case 3:
        day = "Çarşamba";
    break;
    case 4:
        day = "Perşembe";
    break;
    case 5:
        day = "Cuma";
    break;
    case 6:
        day = "Cumartesi";
    break;
    case 7:
        day = "Pazar";
    break;
}

 d=checkTime(day);
 h=checkTime(hour);
 m=checkTime(minute);
 s=checkTime(seconds);
 saat.innerHTML="bugün : <span class='fw-bold'>"+day+"</span> saat : <span class='fw-bold'>"+hour+":"+minute+":"+seconds+"</span>";
 t=setTimeout('startTime()',1000);
}

function checkTime(i)
{
if (i<10)
 {
  i="0" + i;
 }
return i;
}
