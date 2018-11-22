var traer= document.getElementById("canvas");
var ancho= traer.width;
var d = traer.getContext("2d");
var colorpintar= document.getElementById("textox");
var colorfinal= colorpintar.value;
var text= document.getElementById("textito");
var boton= document.getElementById("botoncito");
boton.addEventListener("click",dibujarlineas);
var pollo= document.getElementById("chao");
pollo.addEventListener("click", buton);


function dibujar(color,xinicial,yinicial,xfinal,yfinal)
{
d.beginPath();
d.strokeStyle=color;
d.moveTo(xinicial,yinicial);
d.lineTo(xfinal,yfinal);
d.stroke();
d.closePath();
}

function dibujarlineas()
{

  var colorfinal= colorpintar.value;
  var colorcito=colorfinal;
  var lineas= text.value;
  var l= 0;
  var espacio= ancho/text.value
  var yi, xf, xi, yf, yin, xfi, xin, yfin;

  for (l=0; l<lineas; l++)
  {
    yi= espacio*(l+1);
    xf= espacio*(l+1);
    xi= espacio*(l+1);
    yf= espacio*(l+1);
    yin= espacio*(l+1);
    xfi= 290-(espacio*l);
    xin= espacio*(l+1);
    yfin=290-(espacio*l);


  dibujar(colorcito,0,yi,xf,300);
  dibujar(colorcito,xi,0,300,yf);
  dibujar(colorcito,0,yin,xfi,0);
  dibujar(colorcito,xin,300,300,yfin);
  }

}
function buton()
{
  var dice= "Gracias por utilizar nuestra aplicacion"
  alert(dice);
}
