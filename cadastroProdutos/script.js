function validarProduto(){
    
    let nome = document.getElementById("nomeProduto").value;
    let codigo = document.getElementById("codProduto").value;
    let qtidade = document.getElementById("qtidadeProduto").value;

    // if(nome === ""){
    //     alert("Nome do produto não pode estar em branco. Por Favor preenchê-lo");

    // }else if(codigo === ""){
    //     alert("Código do produto não pode estar em branco. Por Favor preenchê-lo");

    // }else if(qtidade === ""){
    //     alert("Quantidade do produto não pode estar em branco. Por Favor preenchê-lo");

    // }else{
    //     document.getElementById('cod').innerHTML = document.getElementById('codProduto').value
    //     document.getElementById('nome').innerHTML = document.getElementById('nomeProduto').value
    //     document.getElementById('quant').innerHTML = document.getElementById('qtidadeProduto').value
    // }

        

    let linhaProduto = document.createElement("tr");
    let celulaCodigo = document.createElement("td");
    let celulaNome = document.createElement("td");
    let celulaQuant = document.createElement("td");


    let tbody = document.querySelector(".tbody");

    celulaCodigo.innerHTML = codigo;
    celulaNome.innerHTML = nome;
    celulaQuant.innerHTML = qtidade;


    linhaProduto.appendChild(celulaCodigo);
    linhaProduto.appendChild(celulaNome);
    linhaProduto.appendChild(celulaQuant);

    tbody.appendChild(linhaProduto);

        // document.getElementById('cod').innerHTML = document.getElementById('codProduto').value
        // document.getElementById('nome').innerHTML = document.getElementById('nomeProduto').value
        // document.getElementById('quant').innerHTML = document.getElementById('qtidadeProduto').value

} 





function limpar(){

    let nome = document.getElementById("nomeProduto").value;
    let codigo = document.getElementById("codProduto").value;
    let qtidade = document.getElementById("qtidadeProduto").value;

    if(qtidade != ""){
        document.getElementById("qtidadeProduto").value = "";
    
    }else if(codigo != ""){
        document.getElementById("codProduto").value = "";

    }else if(nome != ""){
        document.getElementById("nomeProduto").value = "";

    } else{
        alert("Não há nada para limpar!")
    }
}















// function criarElemento(){
    

    

//     // document.getElementById('cod').innerHTML = document.getElementById('codProduto').value
//     // document.getElementById('nome').innerHTML = document.getElementById('nomeProduto').value
//     // document.getElementById('quant').innerHTML = document.getElementById('qtidadeProduto').value

    
// }


// function mostrarProdutos(){

//     document.getElementById('cod').innerHTML = document.getElementById('txtCodProduto').value
//     document.getElementById('nome').innerHTML = document.getElementById('txtNomeProduto').value
//     document.getElementById('quant').innerHTML = document.getElementById('qtidadeProduto').value


    
    
// }


