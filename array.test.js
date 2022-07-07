const mercadoList = [
    'frango',
    'energético',
    'café',
    'macarrão',
    'leite',
  ]
  
test('contém na lista', () => {
    expect(mercadoList).not.toContain('ovo')
    expect(new Set(mercadoList)).toContain('frango')
  })