// API KEY eaff4d442ccbfbd84503e025947808fa


const key =  "eaff4d442ccbfbd84503e025947808fa"

function onclickButton(){
    let input = document.querySelector(".input").value
    
    buscarCidade(input)
    

}


async function buscarCidade(input) {
    let dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${key}&lang=pt_br&units=metric`).then(response => response.json());
    

    dadosNaTela(dados)
}


function dadosNaTela(dados){
    console.log(dados)


    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + " °C"
    document.querySelector(".text-temp").innerHTML = dados.weather[0].description
    document.querySelector(".umidade").innerHTML = "Umidade:  " + dados.main.humidity + " %"
    document.querySelector(".img-temp").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
}


