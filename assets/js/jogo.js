/**
 * Criando de forma dinamica para recuperar o tamanho da tela do jogo.
 * 
 * obs: dever ser atribuida essa funcão no onresize do body da aplicação
 */

var largura = 0
var altura = 0
var vidas = 1
var tempo = 10
var criaMosquitoTempo = 1500

/**
 * Definindo a dificuldade do jogo
 * 
 */
var nivelJogo = window.location.search
nivelJogo = nivelJogo.replace('?', '')

if(nivelJogo === 'facil'){
  criaMosquitoTempo = 1500
}else if(nivelJogo === 'normal'){
  criaMosquitoTempo = 1000
}else if(nivelJogo === 'dificil'){
  criaMosquitoTempo = 750
}

function tamanhoDaTela(){
  altura = window.innerHeight
  largura = window.innerWidth

  console.log(largura, altura)
}

tamanhoDaTela()

/**
 * Criando o tempo de jogo
 */

var cronometro = setInterval(function(){

  tempo -= 1

  if(tempo < 0){
    clearInterval(cronometro)
    clearInterval(criaMosquito)
    window.location.href = 'vitoria.html'
  }else{
    document.getElementById('cronometro').innerHTML = tempo
  }
}, 1000)

/**
 * Criando de forma dinamica para gerar em uma coordenada x e y 
 * 
 * para isso você usa o Math.random e mutiplica pelas coordenadas gerada de forma randomica
 * 
 * para poder criar um elemento html na pagina
 */

function posicaoRandomica(){

  // remover um elemento caso exita (mosquito)
  if(document.getElementById('mosquito')){
    document.getElementById('mosquito').remove()

    // Logica para remover as vidas caso não clique no mosquito
    if(vidas > 3){
      
      window.location.href = 'fimDeJogo.html'
    }else{
      document.getElementById('v' + vidas).src = 'assets/img/coracao_vazio.png'
      vidas++
    }
  }

  // subtair 90 por conta do tamanho da imagem para não criar a barra de rolagem
  var posicaoX = Math.floor(Math.random() * largura) - 90
  var posicaoY = Math.floor(Math.random() * altura) - 90

  // logica quando o valor for 0 na posicaoX e posicaoY
  posicaoX = posicaoX < 0 ? 0 : posicaoX
  posicaoY = posicaoY < 0 ? 0 : posicaoY

  console.log(posicaoX, posicaoY)

  // criando o elemento html
  var mosquito = document.createElement('img')
  mosquito.src = 'assets/img/mosquito.png'
  mosquito.className = tamanhoMosquito() + ' ' + ladoMosquito()
  mosquito.style.left = posicaoX + 'px'
  mosquito.style.top = posicaoY + 'px'
  mosquito.style.position = 'absolute'
  mosquito.id = 'mosquito'
  mosquito.onclick = function(){
    this.remove()
  }

  document.body.appendChild(mosquito)

}

/**
 * Criando uma função para atribuir de forma aleatoria o tamanho do mosquito
 */

function tamanhoMosquito(){
  var classe = Math.floor(Math.random() * 3)

  switch(classe){
      case 0:
        return 'mosquito1'
      case 1:
        return 'mosquito2'
      case 2:
        return 'mosquito3'
  }
}

/**
 * Criando uma função para atribuir de forma aleatoria o lado  do mosquito
 */

function ladoMosquito(){
  var classe = Math.floor(Math.random() * 2)

  switch(classe){
      case 0:
        return 'ladoA'
      case 1:
        return 'ladoB'
  }
}


