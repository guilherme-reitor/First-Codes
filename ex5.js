

var multa



for (var cont =1; cont<=5; cont++) {
   var velo = prompt("Qual a velocidade do veiculo:  ("+cont+")")
   var media = velo/5
   

   if(multa>=1)
      cont++

    if(velo>=120){
    document.write(`Esse veiculo FOI multado \nA media de velocidade é ${media}`)
    }


    else{
    document.write(`Esse veiculo NÃO foi multado \nA media de velocidade é ${media}`)
    }
   } 
  
