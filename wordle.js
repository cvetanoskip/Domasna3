var obidi=5;
window.onload=function(){
    var start=new Date();
var zbor1 = document.getElementById("myDivID");
var popup = document.getElementById("popup-window");
var close=document.getElementById("close-button");
var izvestuvanje = document.getElementById("izvestuvanje");
var input=document.getElementById("obid");
var button1 = document.getElementById("kopce");
var kopce2 = document.getElementById("kopce2");
var a=["тенис","актовка","актер","доктор","играч","писател","книга","монитор","гитара","топка","ласер","ласер","видео","слика","добар","паметен","огледало","кугла","оган","памук","сонце","мотор"];
zbor.apply(null,a);
input.addEventListener("keyup", function (event) {
    
    if (event.key === "Enter") {
        kopce2.click();
        
    }})
kopce2.onclick=proveri;

  close.addEventListener("click", function() {
    
    popup.style.display = "none";
    
  });
  close.onclick=zbor;
bukvi();
function zbor(){
    start=new Date();
    input.value="";
    input.focus();
    var i=Math.floor(Math.random()*20);
    obidi=5;
    zbor1.textContent=a[i].toUpperCase();
    
    bukvi();
}
function bukvi()
{
    var i;
    var k;
    var l;
    while(true)
    {
     i=Math.floor(Math.random()*(zbor1.textContent.length));
     k=Math.floor(Math.random()*(zbor1.textContent.length));
     l=Math.floor(Math.random()*(zbor1.textContent.length));
     if(i!==k&&i!==l&&k!==l)break;
    }
   
    var characters = zbor1.textContent.split("");

    characters[i] = "<span style='color:white;'>" + characters[i] + "</span>";
    characters[k] = "<span style='color:white;'>" + characters[k] + "</span>";
    characters[l] = "<span style='color:white;'>" + characters[l] + "</span>";

    zbor1.innerHTML = characters.join("");
    
}

function proveri(){

    obidi--;
    if(obidi>0)
    {
        
        if(input.value.toLowerCase().localeCompare(zbor1.textContent.toLowerCase(), 'mk', { sensitivity: 'base' })==0)
        {
            var end=new Date();
            var pominato=(end-start)/1000;
            izvestuvanje.textContent="Go pogodi zborot so "+obidi+" preostanati obidi i za "+pominato+" sekundi";
            input.blur();
            popup.style.display = "block";
            zbor1.innerHTML="<span style='color:white;'>" + zbor1.textContent + "</span>";
        }
        else{
        
        window.alert(obidi+" preostanati obidi")
        input.value="";
        input.focus();
    }
        
    }
    
    if(obidi==0)
    {
        
        izvestuvanje.innerHTML="Ne go pogodivte zborot. <br> Tocniot zbor bese "+zbor1.textContent;
         popup.style.display = "block"; 
        
        zbor1.innerHTML="<span style='color:white;'>" + zbor1.textContent + "</span>";
    }
}
}
