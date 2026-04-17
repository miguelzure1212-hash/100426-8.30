const titulodig = document.getElementById('Titulo').value;
const conteudodig = document.getElementById('Conteudo').value;


const novaDiv = document.createElement('div');
const Caixa2 = document.getElementById('caixa2');

function Mensagamento (){
    Caixa2.appendChild(novaDiv);
}

const formulario = document.getElementById('Formulario');

formulario.addEventListener('submit', function(event) {
   
    event.preventDefault(); 
    
    Mensagamento()
})

novaDiv.classList.add('minha-classe-css');