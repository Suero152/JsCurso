function save(){
    // Esse método impede o comportamento padrão do submit que é o refresh da página.
    event.preventDefault();
    const name = document.querySelector("input[name='name']").value
    // Se você pular para o value você não precisa especificar que a opção marcada que é para ser resgatada.
    const programmingLanguages = document.querySelector("select[name='programming-lang']").value
    alert('Nome; ' + name + '\n Linguagem de programação: ' + programmingLanguages)
}