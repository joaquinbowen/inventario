/*recuperarTexto = function(idComponente){
    let componente=document.getElementById(idComponente);
    let valorComponente=componente.value;
    return valorComponente;

}*/


//ARROW functions
recuperarTexto=(idComponente)=>{
    let componente = document.getElementById(idComponente);
    let valorComponente = componente.value;
    return valorComponente;
}

recuperarInt = (idComponente) => {
    let componente = recuperarTexto(idComponente);
    let valorEntero= parseInt(componente)
    return valorEntero;
}

recuperarFloat = (idComponente)=>{
    let cmp = recuperarTexto(idComponente);
    let vFloat = parseFloat(cmp);
    return vFloat;
}