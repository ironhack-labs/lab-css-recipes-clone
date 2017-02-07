// Paragraphs

var myText = "This was my grandmother's apple pie recipe. I have never seen another one quite like it. It will always be my favorite and has won me several first place prizes in local competitions. I hope it becomes one of your favorites as well!";
var dom = document.getElementsByClassName("text-1").innerHTML = myText;

 for (var x = 0; x < myText.lenght; x++){
  dom[x].innerHTML = myText;
}


//    function changeText(){
//       document.write(dom);
//      }
// changeText();
