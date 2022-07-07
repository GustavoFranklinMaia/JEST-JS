test('the data will be peanut butter', () => {
    return expect(fetchData()).resolves.toBe('peanut butter');
  });