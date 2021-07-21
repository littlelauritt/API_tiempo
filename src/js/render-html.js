// SELECCIONAMOS LOS ELEMENTOS DEL HTML
const main = document.querySelector('main');
const resultadosBusqueda = document.getElementById('resultado-busqueda');
const kelvin = 273.15;

export const renderizarHTML = (tiempo) => {
    main.classList.remove('inicial');
    resultadosBusqueda.innerHTML = `<div class="item">
                                        <h3 class="estiloh4">El tiempo en ${tiempo.name} es de:</h3>
                                        <h2>${parseFloat(tiempo.main.temp-kelvin,10).toFixed(2)}<span> &#x2103;</span></h2>
                                        <h4 class="estiloh4">Temperatura máxima: ${parseFloat(tiempo.main.temp_max-kelvin,10).toFixed(2)}<span> &#x2103;</span></h4>
                                        <h4 class="estiloh4">Temperatura mínima: ${parseFloat(tiempo.main.temp_min-kelvin,10).toFixed(2)}<span> &#x2103;</span></h4>
                                    </div>`
};
