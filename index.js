var run=setInterval(car,50);
margin=0;
function car(){
    if(margin==1150){
  clearInterval(run);
  var run=setInterval(car,50);
    margin=0;
    }else{
        margin+=5;
        var x=document.getElementById('policeCar');
        x.style.marginLeft=margin+'px';
        var z=document.getElementById('siren');
        z.play();
    }
}