const formLogin = document.getElementById('form-login')
const usernameInput = document.querySelector("#username")
const passwordInput = document.querySelector("#password")

function validaInformacoes(username, password) {
    if(username.length > 6 && password.length > 8) {
        alert("Validado com sucesso !")
        return resetForm()
    }
    
    return alert('Ocorreram erros em sua validação !')
}

function resetForm(){
    usernameInput.value = ""
    passwordInput.value = ""
}

formLogin.addEventListener('submit', (event) => {
    event.preventDefault()
    // validaInformacoes(usernameInput.value, passwordInput.value)

    console.log('usernameInput', usernameInput.value.toLowerCase())
    console.log('usernameInput', usernameInput.value.toUpperCase())

    // Validações do formulário
    // 1. Username > 6 caracteres
    // 2. Password > 8 caracteres
    // -> capturar as informações pelos IDs dos inputs
    // -> realizar as validações
})