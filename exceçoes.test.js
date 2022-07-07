function compileAndroidCode() {
    throw new Error('você está usando o JDK errado')
  }
  
  test('compilando para android segue conforme esperado', () => {
    expect(() => compileAndroidCode()).toThrow()
    expect(() => compileAndroidCode()).toThrow(Error)
  
//* É possísvel usar a mensagem exata de erro ou uma regexp
    expect(() => compileAndroidCode()).toThrow('você está usando o JDK errado')
    expect(() => compileAndroidCode()).toThrow(/JDK/)
  })

//? A função que lança uma exceção precisa ser chamada dentro de uma função de embrulho, caso contrário a afirmação toThrow falhará.