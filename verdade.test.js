test('10', () => {
    const n = 'Olá Mundo!'
  expect(n).not.toBeNull()
  expect(n).toBeDefined()
  expect(n).not.toBeUndefined()
  expect(n).toBeTruthy()
  expect(n).not.toBeFalsy()
  })

test('null', () => {
    const z = null
    expect(z).toBeNull()
    expect(z).toBeDefined()
    expect(z).not.toBeUndefined()
    expect(z).not.toBeTruthy()
    expect(z).toBeFalsy()
  })  