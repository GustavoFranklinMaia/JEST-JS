test("dois + dois", () => {
    const value = 2 + 2
    expect(value).toBeGreaterThan(3)
    expect(value).toBeGreaterThanOrEqual(4)
    expect(value).toBeLessThan(5)
    expect(value).toBeLessThanOrEqual(4.5)
  
    //! toBe E toEqual SÃO EQUIVALENTES PARA NÚMEROS.
    expect(value).toBe(4)
    expect(value).toEqual(4)
  })


test('NÚMEROS DE PONTO FLUTUANTE', () => {
    const value = 0.1 + 0.2
    //expect(value).toBe(0.3)   NÃO FUNCIONA DEVIDO A UM ERRO DE ARREDONDAMENTO
    expect(value).toBeCloseTo(0.3) // Isso funciona.
  })