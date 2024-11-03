function on1(){
    document.getElementById("mywork-modal1").style.display="flex"
}
function off1(){
    document.getElementById("mywork-modal1").style.display="none"
}
function on2(){
    document.getElementById("mywork-modal2").style.display="flex"
}
function off2(){
    document.getElementById("mywork-modal2").style.display="none"
}

function on3(){
    document.getElementById("mywork-modal3").style.display="flex"
}
function off3(){
    document.getElementById("mywork-modal3").style.display="none"
}
function on4(){
    document.getElementById("mywork-modal4").style.display="flex"
}
function off4(){
    document.getElementById("mywork-modal4").style.display="none"
}
function on5(){
    document.getElementById("mywork-modal5").style.display="flex"
}
function off5(){
    document.getElementById("mywork-modal5").style.display="none"
}
function on6(){
    document.getElementById("mywork-modal6").style.display="flex"
}
function off6(){
    document.getElementById("mywork-modal6").style.display="none"
}


function onmenu(){
    document.getElementById("menu-modal").style.display="flex"
}
function offmenu(){
    document.getElementById("menu-modal").style.display="none"
}






window.onscroll= function(){
    var hientai = window.scrollY
    if(hientai>10){
      document.getElementById("header").style.background = "linear-gradient(to right, #00f298, #07f7f7)"
      document.getElementById("header").style.height="6vh"
      document.getElementById("header").style.transition="0.6s ease"
     
    }
    else{
      document.getElementById("header").style.background ="transparent"
      document.getElementById("header").style.height="9vh"
      document.getElementById("header").style.transition="0.6s ease"
    }
  }