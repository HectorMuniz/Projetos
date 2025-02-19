
let horaElement = document.querySelector(".hora");
let minutosElement = document.querySelector(".minuto");
let segundosElement = document.querySelector(".segundo");



function newTime(){
    let data = new Date();


    let hora = data.getHours();
    let minuto = data.getMinutes();
    let segundo = data.getSeconds();
    
    horaElement.textContent = fixtime(hora);
    minutosElement.textContent = fixtime(minuto);
    segundosElement.textContent = fixtime(segundo);

}
    
    
function fixtime(time){
    return time < 10 ? '0'+time : time

}

setInterval(newTime, 1000)





























// let diaElement = document.querySelector(".dia")
// let mesElement = document.querySelector(".mes")
// let anoElement = document.querySelector(".ano")




// function data(){
    
//     let datanova = new Date();


// let dia = datanova.getDate();
// let mes = datanova.getMonth();
// let ano = datanova.getFullYear();

//     diaElement.textContent = fixtime(dia);
//     mesElement.textContent = fixtime(mes);
//     anoElement.textContent = fixtime(ano);

// }


