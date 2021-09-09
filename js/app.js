


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
//                          botões
// 


//   botão background
// 
var botaoEnviar = document.createElement("button");
var botaoTextoEnviar = document.createTextNode("Background");
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





// 
//                  functions & listeners
// 




// valida se os campos estão preenchidos
// 
let inputs= document.querySelectorAll("input")

botaoCreateDiv.addEventListener('click', function(event){
    event.preventDefault();
    let result=true;

    for(let i=0; i< inputs.length-1; i++){
        if(inputs[i].value.length<=1 || inputs[i].value.length>=150){
            result=false;
            break;
        }
    }
    if(result){
        createContainer(urlInput.value, tituloInput.value, subTituloInput.value, descricaoInput.value)
    }else{
        window.alert("Preencha todos os campos para continuar\nO texto deve conter mais que 1 caractere e menos que 150 caracteres")
    }
})

// valida a quantidade de caracteres
// 
inputs.forEach(input=>{
    input.addEventListener('keydown',event=>{

        if(input.value.length>=150 && event.key!='backspace'){
            input.blur()
        }
    })
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






// localstorage
// 
if(localStorage=null){

    localStorage.setItem(`json`, JSON.stringify([]))
}

let listItem=localStorage.getItem(`json`)
listItem=JSON.parse(listItem)


if(listItem!=null){
    listItem.forEach((element)=>{
        
        window.onload=createContainer(element.imagem, element.titulo, element.subTitulo, element.descricao)
    })

}






// 
//                        function pro conteudo
// 
function createContainer(url, titulo, subTitulo, descricao){

    // verifica se existe div e/ou conteudo na div
    // 
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
    var containerTituloText = document.createTextNode(titulo);
    var containerSubTituloText = document.createTextNode(subTitulo);
    var containerDescricaoText = document.createTextNode(descricao);
 
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


    
    document.querySelector('#containerContent').style.backgroundImage=`url('${url}')`

    }else{
        document.querySelector('#containerContent').style.backgroundImage=`url('${url}')`
        
        //     textos nos tipos de textos
        // 
        document.querySelector('#containerH1').innerHTML = titulo;
        document.querySelector('#containerH3').innerHTML = subTitulo;
        document.querySelector('#containerP').innerHTML = descricao; 
    }

    
    let list=JSON.parse(localStorage.getItem(`json`))

    let item={imagem:urlInput.value,
            titulo:tituloInput.value,
            subtitulo:subTituloInput.value,
            descricao:descricaoInput.value}
  
    list.push(item)

    localStorage.setItem("json", JSON.stringify(list))
}
