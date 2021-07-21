// IMPORTAMOS EL CSS
import './css/style.css';

// IMPORTAMOS LAS FUNCIONES
import { conexionCORD, conexionAPI } from "./js/http-provider";
import { renderizarHTML } from './js/render-html';

//ELEMENTOS DEL DOM
const form = document.querySelector('form');
const input = document.getElementById('input');


// EVENTOS
form.addEventListener('submit', async (evento) => {
    evento.preventDefault();
    const datosInput = await conexionCORD(input.value);
    const datosUnion = await conexionAPI(datosInput.results[0].geometry.lat, datosInput.results[0].geometry.lng);
    renderizarHTML(datosUnion);
});
