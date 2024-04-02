function register(elements){
    const username = elements.children.username.value   
    const password = elements.children.password.value
    const passwordConfirmation = elements.children.passwordConfirmation.value

    if(password === passwordConfirmation){
        alert(`Usuário ${username} Registrado!`)
    }else{
        alert('As senhas não conferem!')
    }

    console.log({username, password, passwordConfirmation})
}