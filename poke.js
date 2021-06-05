/* -------------- IDs --------------------*/
let mas = document.getElementById("mas");
let menos = document.getElementById("menos");
let identificador = document.getElementById("identificador");

// Inicio --------------------------------------
identificador.innerHTML=1;
actualiza();


// FUNCION INC ------------------------
function inc(){
    identificador.innerHTML++;
    actualiza();
}
// FUNCION DEC ------------------------
function dec() {
    if (identificador.innerHTML>1){
        identificador.innerHTML--;
        actualiza();
    }
}

// FUNCION ACTUALIZA------------------------------------

function actualiza() {
    
let contador = identificador.innerHTML;
url =  "https://pokeapi.co/api/v2/pokemon/" + contador + "/";

fetch(url)
.then(response => response.json())
.then(data => {

let nombrep = document.getElementById("nombrep");
nombrep.innerHTML=`${data.name}`;

let frente = document.getElementById("frente");
let trasero = document.getElementById("trasero");

frente.innerHTML=`
<img src="${data.sprites.front_default}" 
onMouseOver="src='${data.sprites.front_shiny}';"
onMouseOut= "src='${data.sprites.front_default}';">
`

trasero.innerHTML=`
<img src="${data.sprites.back_default}" 
onMouseOver="src='${data.sprites.back_shiny}';"
onMouseOut= "src='${data.sprites.back_default}';">
`
})
.catch(err => console.log(err));
}








