
play.addEventListener('click',()=>{
    musica.play()
    pause.style.display = 'block'
    play.style.display = 'none'
})
pause.addEventListener('click',()=>{
    musica.pause()
    pause.style.display = 'none'
    play.style.display = 'block'
})

musica.addEventListener('timeupdate',()=>{
    let barra = document.querySelector('progress')
    barra.style.width = Math.floor((musica.currentTime / musica.duration)* 100)+ '%'
    inicio.innerHTML = segundosEminutos(Math.floor(musica.currentTime))
    fim.innerHTML = segundosEminutos(Math.floor(musica.duration))
    if(musica.currentTime == musica.duration){
        renderizarMusica(indexMusica)
        indexMusica++
        musica.play()
    }if(indexMusica == 0){
        indexMusica = 1
    }
})

barra.addEventListener('click',(evente)=>{
    let progressbar = barra.clientWidth
    let clickevento = evente.offsetX
    let durationaudio = musica.duration
    musica.currentTime = (clickevento/progressbar)* durationaudio
    addiconPause()
    musica.play()
})
voltar.addEventListener('click',()=>{
    indexMusica--
    if(indexMusica < 0){
        indexMusica = 16
    }
    renderizarMusica(indexMusica)
    musica.play()
    addiconPause()
})
proximo.addEventListener('click',()=>{
    indexMusica++
    if(indexMusica > 16){
        indexMusica = 0
    }
    renderizarMusica(indexMusica)
    musica.play()
    addiconPause()
})
function renderizarMusica(index){
    musica.setAttribute('src',musicas[index].srcMusica)
    musica.addEventListener('loadeddata',() =>{
        nomeDaMusica.innerHTML = musicas[index].tituloDaMusica
        nomeDoArtista.innerHTML = musicas[index].tituloDoArtista
        imgMusica.src = musicas[index].imgCard
        inicio.innerHTML = segundosEminutos(Math.floor(musica.currentTime))
        fim.innerHTML = segundosEminutos(Math.floor(musica.duration))
    })
}
openlista.addEventListener('click',()=>{
    cardplay.classList.remove('card-play-open')
    lista.classList.add('lista-open')
})