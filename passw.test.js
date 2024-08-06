const {validatePassword, checkAge, checkPassword, validateForm} = require('./passw')

it('Testando se as regras de senha estão corretas' ,() =>{

    expect(validatePassword("abc123!@")).toBe(true)
})
it('Testando se a senha é igual a confirmação de senha' ,() =>{

    expect(checkPassword("abc123","abc239")).toBe(false)
})
it('Testando se idade é maior que 18anos' ,() =>{

    expect(checkAge("Dec 25, 2005")).toBe(true)
})
it('Testando se o formulario foi enviado com sucesso' ,() =>{

    expect(validateForm("abc123","abc123","Dec 25, 2005","city","state")).toBe(true)
})

