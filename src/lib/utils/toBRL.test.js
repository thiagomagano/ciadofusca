import { test, expect } from 'vitest'
import toBRL from "$lib/utils/toBRL";


test('Deve retornar o valor convertido em Moeda Brasileira', () => {

  expect(toBRL(5000)).toBe("R$ 5.000,00");
});