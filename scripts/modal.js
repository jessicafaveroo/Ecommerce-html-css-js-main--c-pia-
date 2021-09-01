const modalWrapper = document.querySelector(".modal-wrapper")
const show = document.querySelector("#content .prod1 .prod12 button")

function ativar(){
    modalWrapper.classList.add("active")
}

function desativar(){
    modalWrapper.classList.remove("active")
}