

ejecutarOperacion=(operar)=>{
    let valor1 = recuperarInt("txtValor1");
    let valor2 = recuperarInt("txtValor2");
    let resultado;
    resultado=operar(valor1,valor2);
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


ejecutar=(fn)=>{
    console.log("jejejejeje")
    fn();
}

imprimir=()=>{
    console.log("asdasdfgdasfa");
}

saludar=()=>{
    alert("ejecutandoskdanvffpasdbngv")
}


testEjecutar=()=>{
    ejecutar(imprimir);
    ejecutar(saludar);
    ejecutar(() => {
        alert("ejecutandoskdanvffpasdbngv")
    });
}