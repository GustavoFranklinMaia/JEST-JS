test('não existe O em IVES', () => {
    expect('IVES').not.toMatch(/O/)
  })
  
  test('mas existe st em Gustavo', () => {
    expect("Gustavo").toMatch(/st/)
  })