/*
Lógica de programação
    
    [x] Saber quando o usuario clicou no botao
    [x] Mudar o posicionamento do modal
    [x] Fazer a mascara ficar visivel 
    [x] quando clicar na mascara, fechar o modal

*/

const modal = document.querySelector(".modal");
const mascara = document.querySelector('.mascara-modal');


function openModal() {
    modal.style.left = '50%'
    mascara.style.visibility = 'visible'

}

function closeModal(){
    modal.style.left = '-30%'
    mascara.style.visibility = 'hidden'
}