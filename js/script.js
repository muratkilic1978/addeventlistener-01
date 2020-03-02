const btnOneElement = document.getElementById("btn1");

const btnTwoElement = document.getElementById("btn2");


btnOneElement.addEventListener("click",function(){
    
    if (document.body.style.backgroundColor == "lightgrey"){
        document.body.style.backgroundColor = "white";
        alert(document.body.style.backgroundColor);
    } else {
        document.body.style.backgroundColor = "lightgrey";
        alert(document.body.style.backgroundColor);
    }
});

let font_is_large = false ;

btnTwoElement.addEventListener("click", change_font_size);


function change_font_size()
{
  const headingOneTitleElement = document.getElementById('headingOneTitle');
  if (!font_is_large) {
    headingOneTitleElement.style.fontSize = "3.5rem";
    headingOneTitleElement.style.letterSpacing = "1.2rem";
    headingOneTitleElement.style.color = "#feb72b";
    
  
    font_is_large = true ;
  }
  else {
    headingOneTitleElement.style.fontSize = "2.2rem";
    headingOneTitleElement.style.letterSpacing = "0rem";
    headingOneTitleElement.style.color = "#666666";
    font_is_large = false ;
  }
}
    

