//CONSTRUCTOREES

function Seguro (marca, year, tipo){
    this.marca = marca;
    this.year = year;
    this.tipo = tipo;
}

function UI (){

}
//LLENA LAS OPCIONES DE LOS AÑOS
UI.prototype.llenarOpciones = ()=>{
    const max = new Date().getFullYear(),
    min = max -20;


    const selectYear = document.querySelector('#year');
    for(let i = max; i>min; i--){
        let option = document.createElement('option')
        option.value = i;
        option.textContent = i;
        selectYear.appendChild(option);
    }
}

//INSTANCIAR UI

const ui = new UI();



document.addEventListener('DOMContentLoaded', ()=>{
    ui.llenarOpciones(); //Llena el select con los años
})