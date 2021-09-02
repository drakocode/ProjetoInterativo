//   formulario
//  
var formulario = document.createElement("form");
formulario.setAttribute("class", "formulario");
formulario.setAttribute("action", "");
document.body.appendChild(formulario);

var form = document.querySelector(".formulario");

var titulo = document.createElement("h1");
var tituloText = document.createTextNode("Preencha o formulário");

titulo.appendChild(tituloText);
form.appendChild(titulo);



// 
//                         inputs
// 



//   titulo
//  
var tituloInput = document.createElement("input");
var divTituloInput = document.createElement("div");
tituloInput.id="titulo-input"
tituloInput.setAttribute("placeholder", "Título");
tituloInput.setAttribute("type", "text");
divTituloInput.appendChild(tituloInput);
form.appendChild(divTituloInput);

//   subtitulo
//  
var subTituloInput = document.createElement("input");
var divSubTituloInput = document.createElement("div");
subTituloInput.id="subTitulo-input"
subTituloInput.setAttribute("placeholder", "Subtítulo");
subTituloInput.setAttribute("type", "text");
divSubTituloInput.appendChild(subTituloInput);
form.appendChild(divSubTituloInput);


//   descrição
// 
var descricaoInput = document.createElement("input");
var divDescricaoInput = document.createElement("div");
descricaoInput.id="descricao-input"
descricaoInput.setAttribute("placeholder", "Descrição");
descricaoInput.setAttribute("type", "text");
divDescricaoInput.appendChild(descricaoInput);
form.appendChild(divDescricaoInput);

//   url
// 
var urlInput = document.createElement("input");
urlInput.id="url-input"
var divUrlInput = document.createElement("div");
urlInput.setAttribute("placeholder", "Url");
urlInput.setAttribute("type", "url");
divUrlInput.appendChild(urlInput);
form.appendChild(divUrlInput);



// 
//                              botões
// 


//   botão enviar
// 
var botaoEnviar = document.createElement("button");
var botaoTextoEnviar = document.createTextNode("Enviar");
botaoEnviar.setAttribute("id", "submit-button");
botaoEnviar.setAttribute("type", "submit");

botaoEnviar.setAttribute("onclick", "changeBackground()");
botaoEnviar.appendChild(botaoTextoEnviar);
form.appendChild(botaoEnviar);

//   botao criar div
// 
var botaoCreateDiv = document.createElement("button");
var botaoTextoCreateDiv = document.createTextNode("CreateDiv");
botaoCreateDiv.setAttribute("id", "creatediv-button");

botaoCreateDiv.appendChild(botaoTextoCreateDiv);
form.appendChild(botaoCreateDiv);



// função verificadora de inputs
// 
botaoCreateDiv.addEventListener('click', function(event){
    event.preventDefault();
    let inputs= document.querySelectorAll("input")
    let result=true;

    for(let i=0; i< inputs.length; i++){
        if(inputs[i].value==""){
            result=false;
        }
    }
    if(result){
        createContainer()
    }else{
        window.alert("Preencha todos os campos para continuar")
    }
})



//   function pra alterar background
// 
document.getElementById("submit-button").addEventListener( 'click',
    (event) => {
        
        event.preventDefault();

        let url = document.getElementById("url-input").value;
        console.log(url)
        if(url != ""){
            document.body.style.backgroundImage = `url('${url}')`;
        }
    }
)

//   prevent default
// 
botaoCreateDiv.addEventListener('click', function(event) {
    event.preventDefault()
});




// 
//                        function pro conteudo
// 
function createContainer(){
    if(tituloInput && subTituloInput&&descricaoInput&&urlInput==""){
        window.location.reload();
    };
    

    if(document.getElementById("container")==null){
    //      container base
    // 
    var container = document.createElement("div");
    container.setAttribute("class", "container");
    container.setAttribute("id", "container");
    container.setAttribute("action", "");
    document.body.appendChild(container);
    //     container pra imagem
    // 
    var containerContent =document.createElement("div");
    containerContent.setAttribute("class","containerContent")
    containerContent.setAttribute("id","containerContent")
    containerContent.setAttribute("action", "");
    
    container.appendChild(containerContent)
    
    //     container pro conteudo em texto
    // 
    var containerText=document.createElement("div")
    containerText.setAttribute("class","containerText")
    containerText.setAttribute("id","containerText")
    containerText.setAttribute("action", "");

    container.appendChild(containerText)

    //    tipos de textos no container
    // 
    var containerTitulo = document.createElement("h1");
    var containerSubTitulo = document.createElement("h3");
    var containerDescricao = document.createElement("p");


    //    textos nos tipos de textos
    // 
    var containerTituloText = document.createTextNode(tituloInput.value);
    var containerSubTituloText = document.createTextNode(subTituloInput.value);
    var containerDescricaoText = document.createTextNode(descricaoInput.value);
 
    containerTitulo.setAttribute('id','containerH1')
    containerSubTitulo.setAttribute('id','containerH3')
    containerDescricao.setAttribute('id','containerP')

    
    //    link dos textos aos tipos
    // 
    containerTitulo.appendChild(containerTituloText);
    containerSubTitulo.appendChild(containerSubTituloText);
    containerDescricao.appendChild(containerDescricaoText);


    //     link dos tipos ao container
    // 
    containerText.appendChild(containerTitulo);
    containerText.appendChild(containerSubTitulo);
    containerText.appendChild(containerDescricao);


    let url = document.getElementById("url-input").value;
    document.querySelector('#containerContent').style.backgroundImage=`url('${url}')`
    }else{
        let url = document.getElementById("url-input").value;
        document.querySelector('#containerContent').style.backgroundImage=`url('${url}')`
        
        //     textos nos tipos de textos
        // 
        document.querySelector('#containerH1').innerHTML = tituloInput.value;
        document.querySelector('#containerH3').innerHTML = subTituloInput.value;
        document.querySelector('#containerP').innerHTML = descricaoInput.value; 
    }
}