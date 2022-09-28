
const propsTarget = {
    titulo: [
        "Realismo", 
        "Neotradicional",
        "Acuarela"
    ],
    imgSource: [
        "./Imagenes/Realismo_NuestrosEstilos.png", 
        "./Imagenes/BlackWork.png",
        "./Imagenes/acuarela-300x180.jpg"
    ],
    descripcion: [
        "Los tatuajes realistas tratan de plasmar en la piel una imagen de la forma más real posible, como si de un cuadro de pintura se tratase. Los tatuadores tienen que tener la habilidad para hacer que el tatuaje parezca una fotografía. Este estilo es uno de los más tatuados, y se puede hacer a color o en blanco y negro. Para que tenga el máximo nivel de detalle se utilizan agujas finas.",
        "El tatuaje blackwork, tal como indica su nombre, solo utiliza el color negro para las líneas, las sombras y el relleno. Es uno de los estilos de tatuaje más recientes, aunque siempre han existido los tatuajes a color negro. No obstante, ha sido en los últimos años que este estilo ha evolucionado hasta conseguir un efecto muy puro y recortado.",
        "Este estilo trata de imitar la textura y la forma de la acuarela sobre el papel; es decir, superponiendo veladuras de color de forma fluida. Los colores se difuminan para crear luces y sombras, y se utilizan tonos llamativos: azules, verdes, fucsias, amarillos, etcétera."
    ]
};
const numCambiosTarget = propsTarget.titulo.length;
let contadorCambios = 0;
const nuestrosEstilos = document.querySelector("[data-sectionNuestrosEstilos]");

const tarjetaNuesEst = document.createElement("div");
tarjetaNuesEst.classList.add("nuestrosEstilos__target");

const tituloTargetNuesEst = document.createElement("h2");
tituloTargetNuesEst.classList.add("nuestrosEstilos__target__tittle");

const imgTargetNuesEst = document.createElement("img");
imgTargetNuesEst.classList.add("nuestrosEstilos__target__imagen");

const descripcionTargetNuesEst = document.createElement("p");
descripcionTargetNuesEst.classList.add("nuestrosEstilos__target__descripcion");

tarjetaNuesEst.appendChild(tituloTargetNuesEst);
tarjetaNuesEst.appendChild(imgTargetNuesEst);
tarjetaNuesEst.appendChild(descripcionTargetNuesEst);
nuestrosEstilos.appendChild(tarjetaNuesEst);

const cambioTarget = () => {
    tituloTargetNuesEst.textContent = propsTarget.titulo[contadorCambios];
    imgTargetNuesEst.src = propsTarget.imgSource[contadorCambios];
    descripcionTargetNuesEst.textContent = propsTarget.descripcion[contadorCambios];
    if(contadorCambios >= (numCambiosTarget-1)){
        contadorCambios = 0;
    }else{
        contadorCambios++;
    }
};

let intervalCambioTarget = setInterval(cambioTarget, 10000);
console.log(intervalCambioTarget);
nuestrosEstilos.addEventListener("mousedown", (evento) => {
    clearInterval(intervalCambioTarget);
    console.log("parado");
});
nuestrosEstilos.addEventListener("mouseup", (evento) => {
    intervalCambioTarget = setInterval(cambioTarget, 10000);
    console.log("en movimineto");
});
