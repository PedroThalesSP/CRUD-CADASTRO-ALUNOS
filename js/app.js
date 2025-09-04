const abreModal = document.getElementById("btn-cadastrar")
const fechar = document.querySelector("#fechar")
const modal = document.getElementById("formualario-modal")
const cadastroNovoAluno = document.getElementsByClassName("matricula nome turma")
const salvar = document.getElementById("salvar")

abreModal.addEventListener('click', () =>{
    modal.showModal()
})

fechar.addEventListener("click",()=>{
    modal.close()
})

salvar.addEventListenet("submit", ()=>{ // arrumar  um erro aqui
    alert('aluno cadastrado')
})