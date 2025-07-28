ejecutarSumar=()=>{
    let valor1=recuperarInt("txtValor1");
    let valor2 = recuperarInt("txtValor2");
    console.log("Valor 1>>>>>"+valor1+ " Valor2>>>>>"+valor2);
    let resultado=sumar(valor1,valor2);
    console.log(resultado);
}

ejecutarResta=()=>{
    let valor1 = recuperarFloat("txtValor1");
    let valor2 = recuperarFloat("txtValor2");
    let resultado=restar(valor1,valor2);
    console.log(resultado);
}


sumar=(sum1,sum2)=>{
    let resultado=sum1+sum2;
    return resultado;
}

restar=(r1,r2)=>{
    let resultado=r1-r2;
    return resultado;
}