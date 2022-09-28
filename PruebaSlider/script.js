const srcImages = [
    "https://ingenieriadesoftware.es/wp-content/uploads/2018/07/sqljoin.jpeg",
    "http://youghaltennisclub.ie/wp-content/uploads/2014/06/Tennis-Wallpaper-High-Definition-700x300.jpg",
    "http://welltechnically.com/wp-content/uploads/2013/09/android-widescreen-wallpaper-14165-hd-wallpapers-700x300.jpg"
];

const slider = document.querySelector(".slider");
const imagen = document.querySelector(".slider__image");

let posImagen = 1;
let tocando = false;
imagen.src = srcImages[posImagen];

imagen.addEventListener('mousedown', (e) => {
    tocando = true;
    console.log(tocando);
});
/*
imagen.addEventListener('mousemove', (e) => {
    if (posImagen >= srcImages.length) {
        posImagen = 0;
    }else if(posImagen < 0){
        posImagen = srcImages.length-1;
    }
    console.log("Posicion Imagen", posImagen);
    let movimientoX = e.movementX;
    if (tocando && (movimientoX > 0)) {
        posImagen--;
        imagen.src = srcImages[posImagen];
        console.log(e.movementX);
    }else if(tocando && (movimientoX < 0)){
        posImagen++;
        imagen.src = srcImages[posImagen];
        console.log(e.movementX);
    }
});*/

imagen.addEventListener('mouseup', (e) => {
    tocando = false;
    console.log(tocando);
    console.log(e)
});