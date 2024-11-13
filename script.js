const input = document.querySelector('#tarefa')
const button = document.querySelector('.button')
const lista = document.querySelector('.lista')


button.addEventListener('click', function (){
   if(tarefa.value == "") {
    alert('Digite alguma coisa')
   }else {
     
    lista.innerHTML += `

    <li>
        <i class="fa-solid fa-check"></i>
        <span>${tarefa.value}</span>
        <i class="fa-solid fa-trash"></i>
        </li>
        
        `
   }
     tarefa.value = ''

     const remover = document.querySelectorAll('.fa-trash')
     for(let i = 0; i < remover.length; i++) {
            remover[i].addEventListener('click', function () {
               remover[i].parentElement.remove()
            }) 
     }


     lista.addEventListener('click', function(a) {
       a.target.parentElement.querySelector('.fa-check').style.color = 'green'
       a.target.parentElement.querySelector('span').style.textDecoration ='line-through'
     })

})