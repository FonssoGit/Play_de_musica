
function addiconPause(){
    pause.style.display = 'block'
    play.style.display = 'none'
}
function addiconPlay(){
    pause.style.display = 'none'
    play.style.display = 'block'
}

function segundosEminutos(segundos){
    let Minutos = Math.floor(segundos / 60)
    let Segundos = segundos % 60
    if(Segundos < 10){
        Segundos = '0' + Segundos
    }
    return Minutos + ':' + Segundos
}

let indexMusica = 0
let nomeDaMusica = document.querySelector('.descricao h3')
let nomeDoArtista = document.querySelector('.descricao p')
let imgMusica = document.querySelector('.img-play img')
