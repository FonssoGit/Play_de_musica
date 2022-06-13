moreLista.addEventListener('click',()=>{
    lista.classList.remove('lista-open')

})
iconLista.addEventListener('click',()=>{
    lista.classList.add('lista-open')
})
morecardplay.addEventListener('click',()=>{
    if(cardplay.classList.contains('card-play-open')){

    }
    cardplay.classList.remove('card-play-open')
})
playMusic.addEventListener('click',()=>{
    cardplay.classList.add('card-play-open')
})
renderizarMusica(indexMusica)
