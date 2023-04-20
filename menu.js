const turno = document.querySelector (".d-flex");
const menu = document.querySelector (".formulario");

console.log(menu)
console.log(turno)


turno.addEventListener("click", ()=>{
    menu.classList.toggle("deploy")
})


/*Aplico una condicional*/

window.addEventListener("click", e=>{
    if(menu.classList.contains("deploy")
        && e.target != menu && e.target != turno){
            menu.classList.toggle("deploy")
        }
})
