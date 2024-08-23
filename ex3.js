cont = 1
var extrato = parseFloat(0)
var media = parseFloat(0)
var valormax =  parseFloat (0)
var valormin = parseFloat (Infinity)


while(cont<=10){
    var saque = parseFloat(prompt("Qual valor deseja sacar? ("+ cont+ " Cliente)"))
    cont+=1
    var extrato = extrato + saque
    var media = extrato /cont
    
    
    if(saque<valormin){
        valormin = saque
    }else if (saque>valormax){
        valormax = saque
    }
   
}
document.write("O valor final do dia foi de: ",extrato,"<br> E a media foi de" ,media,"<br>Valor minimo",valormin,"<br>Valor maximo", valormax)   
