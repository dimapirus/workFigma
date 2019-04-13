// скрыть/открыть блок
function toggA(a) {
  var b= document.getElementById('Hide_Show').style;

  if(a.innerHTML=='Learn More...'){a.innerHTML='Hide text';b.display='inline-block';return}
  a.innerHTML='Learn More...'; b.display='none'
}
function toggB(a) {
  var b= document.getElementById('Hide_Show2').style;

  if(a.innerHTML=='Learn More...'){a.innerHTML='Hide text';b.display='inline-block';return}
  a.innerHTML='Learn More...'; b.display='none'
}