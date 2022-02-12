function entrada(num)   {

   var numero =  document.getElementById("resultado").innerHTML;
   document.getElementById('resultado').innerHTML = numero + num
}
function apagar(){
   var resultado = document.getElementById('resultado').innerHTML;
   document.getElementById('resultado').innerHTML = resultado.replace(/.$/,'')
}
function limpar(){
   document.getElementById('resultado').innerHTML=""
}
function resposta(){
   var resultado = document.getElementById('resultado').innerHTML;
   if(resultado){
   document.getElementById('resultado').innerHTML=eval(resultado)
   }
   else{
      document.getElementById('resultado').innerHTML=":/"
   }
}