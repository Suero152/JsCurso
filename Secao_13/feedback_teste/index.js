function verifyEmail(){
    event.preventDefault()
    if (document.querySelector("input[name='teste']").value != '' && document.querySelector("input[name='teste']").value.length >= 3){
        console.log('enviado')
        document.querySelector("input[name='teste']").style.border = '1px solid green'
        document.getElementById('p').style.display = 'none'
    }else{
        document.querySelector("input[name='teste']").style.border = '1px solid red'
        document.getElementById('p').style.display = ''
    }
}