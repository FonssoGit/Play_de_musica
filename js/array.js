let musicas = [
    {
        tituloDaMusica:'Fall Out Boy - Centuries ',
        tituloDoArtista:'Imagine Dragons',
        srcMusica:'music/albumImagineDragons/Fall Out Boy - Centuries (Official Music Video)(MP3_320K)-01.mp3',
        imgCard:'img/imgAlbumImagineDragons/imagine-dragons-01.jpg'
    },
    {
        tituloDaMusica:'Imagine Dragons - Bad Liar',
        tituloDoArtista:'Imagine Dragons',
        srcMusica:'music/albumImagineDragons/Imagine Dragons - Bad Liar (Official Music Video)(MP3_320K)-02.mp3',
        imgCard:'img/imgAlbumImagineDragons/imagine-dragons-02.jpg'
    },
    {
        tituloDaMusica:'Believer ',
        tituloDoArtista:'Imagine Dragons',
        srcMusica:'music/albumImagineDragons/Imagine Dragons - Believer (Official Music Video)(MP3_320K)-03.mp3',
        imgCard:'img/imgAlbumImagineDragons/imagine-dragons-03.webp'
    },
    {
        tituloDaMusica:'Birds',
        tituloDoArtista:'Imagine Dragons',
        srcMusica:'music/albumImagineDragons/Imagine Dragons - Birds (Animated Video)(MP3_320K)-04.mp3',
        imgCard:'img/imgAlbumImagineDragons/imagine-dragons-04.png'
    },
    {
        tituloDaMusica:'Bones ',
        tituloDoArtista:'Imagine Dragons',
        srcMusica:'music/albumImagineDragons/Imagine Dragons - Bones (Official Music Video)(MP3_320K)-05.mp3',
        imgCard:'img/imgAlbumImagineDragons/imagine-dragons-05.webp'
    },
    {
        tituloDaMusica:'Demons',
        tituloDoArtista:'Imagine Dragons',
        srcMusica:'music/albumImagineDragons/Imagine Dragons - Demons (Official Video)(MP3_320K)-06.mp3',
        imgCard:'img/imgAlbumImagineDragons/imagine-dragons-06.webp'
    },
    {
        tituloDaMusica:'Follow You',
        tituloDoArtista:'Imagine Dragons',
        srcMusica:'music/albumImagineDragons/Imagine Dragons - Follow You (Official Music Video)(MP3_320K)-07.mp3',
        imgCard:'img/imgAlbumImagineDragons/imagine-dragons-07.jpg'
    },
    {
        tituloDaMusica:'Gold ',
        tituloDoArtista:'Imagine Dragons',
        srcMusica:'music/albumImagineDragons/Imagine Dragons - Gold (Official Music Video)(MP3_320K)-08.mp3',
        imgCard:'img/imgAlbumImagineDragons/imagine-dragons-08.webp'
    },
    {
        tituloDaMusica:'I Bet My Life',
        tituloDoArtista:'Imagine Dragons',
        srcMusica:'music/albumImagineDragons/Imagine Dragons - I Bet My Life(MP3_320K)-09.mp3',
        imgCard:'img/imgAlbumImagineDragons/imagine-dragons-09.webp'
    },
    {
        tituloDaMusica:'Natural ',
        tituloDoArtista:'Imagine Dragons',
        srcMusica:'music/albumImagineDragons/Imagine Dragons - Natural (Official Music Video)(MP3_320K)-10.mp3',
        imgCard:'img/imgAlbumImagineDragons/imagine-dragons-10.jpg'
    },
    {
        tituloDaMusica:'Nothing Left To Say',
        tituloDoArtista:'Imagine Dragons',
        srcMusica:'music/albumImagineDragons/Imagine Dragons - Nothing Left To Say (Art Film)(MP3_320K)-11.mp3',
        imgCard:'img/imgAlbumImagineDragons/imagine-dragons-11.webp'
    },
    {
        tituloDaMusica:'On Top Of The World ',
        tituloDoArtista:'Imagine Dragons',
        srcMusica:'music/albumImagineDragons/Imagine Dragons - On Top Of The World (Official Music Video)(MP3_320K)-12.mp3',
        imgCard:'img/imgAlbumImagineDragons/imagine-dragons-12.webp'
    },
    {
        tituloDaMusica:'Radioactive',
        tituloDoArtista:'Imagine Dragons',
        srcMusica:'music/albumImagineDragons/Imagine Dragons - Radioactive(MP3_320K)-13.mp3',
        imgCard:'img/imgAlbumImagineDragons/imagine-dragons-13.jpg'
    },
    {
        tituloDaMusica:'Roots',
        tituloDoArtista:'Imagine Dragons',
        srcMusica:'music/albumImagineDragons/Imagine Dragons - Roots(MP3_320K)-14.mp3',
        imgCard:'img/imgAlbumImagineDragons/imagine-dragons-14.jpg'
    },
    {
        tituloDaMusica:'Thunder',
        tituloDoArtista:'Imagine Dragons',
        srcMusica:'music/albumImagineDragons/Imagine Dragons - Thunder(MP3_320K)-15.mp3',
        imgCard:'img/imgAlbumImagineDragons/imagine-dragons-15.webp'
    },
    {
        tituloDaMusica:'Whatever It Takes ',
        tituloDoArtista:'Imagine Dragons',
        srcMusica:'music/albumImagineDragons/Imagine Dragons - Whatever It Takes (Official Music Video)(MP3_320K)-16.mp3',
        imgCard:'img/imgAlbumImagineDragons/imagine-dragons-16.jpg'
    },
    {
        tituloDaMusica:'Wrecked ',
        tituloDoArtista:'Imagine Dragons',
        srcMusica:'music/albumImagineDragons/Imagine Dragons - Wrecked (Official Music Video)(MP3_320K)-17.mp3',
        imgCard:'img/imgAlbumImagineDragons/imagine-dragons-17.jpg'
    },
]

let ul = document.querySelector('ul')

for (let i = 0; i < musicas.length; i++){
        let item =`
                    <li item-index="${[i]}">
                        <div class="img-lista">
                            <img src="${musicas[i].imgCard}" alt="">
                        </div>
                        <div class="descricao-lista">
                            <h3>${musicas[i].tituloDoArtista}</h3>
                            <p>${musicas[i].tituloDaMusica}</p>
                        </div>
                            
                        <audio src="${musicas[i].srcMusica}"></audio>
                    </li>
                    `
                
    ul.insertAdjacentHTML('beforeend',item)
}

//adicionar click para todos atributos do item
const slectItem =  document.querySelectorAll('li')

for (let j = 0; j < slectItem.length; j++) {
    if(slectItem[j].classList.add('playing')){
    }
    slectItem[j].setAttribute('onclick','clicked(this)')
    
}
function clicked(elemento){
    let getItemIndex = elemento.getAttribute('item-index')
    indexMusica = getItemIndex
    renderizarMusica(indexMusica)
    cardplay.classList.add('card-play-open')
    musica.play()
    addiconPause()
}





let caixacard = document.querySelector('.caixa-card img')
let titulo = document.querySelector('.titulo h3')
let indexAlbum = 0
let album = [
    {
        imgAlbum:'img/imgAlbumImagineDragons/imagine-dragons-02.jpg',
        tituloAlbum:'Imagine Dragons'
    },
    {
        imgAlbum:'img/imgAlbumAlanWalker/walker02.jpg',
        tituloAlbum:'Alan Walker'
    },
]
let ol = document.querySelector('.albums')

for (let e = 0; e < album.length; e++){
        let t =`
                    <div class="cad-album">
                        <div class="caixa-card">
                            <img src="${album[e].imgAlbum}" alt="">
                        </div>
                        <div class="titulo">
                            <h3>${album[e].tituloAlbum}</h3>
                        </div>
                    </div>
                `
                
    ol.insertAdjacentHTML('beforeend',t)
}
const slectI =  document.querySelectorAll('.cad-album')

for (let r = 0; r < slectI.length; r++) {
    if(slectI[r].classList.add('click')){
    }
    slectI[r].setAttribute('onclick','clicked(this)')
}
