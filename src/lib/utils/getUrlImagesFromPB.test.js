import { test, expect } from 'vitest'
import getUrlImagesFromPB from "$lib/utils/getUrlImagesFromPB";


test('Deve retornar a URL correta para os arquivos no Servidor do Pocket Base', () => {
  expect(getUrlImagesFromPB('carros', 'id-do-carro', 'foto_do_carro.png'))
    .toBe('https://ciadofusca.fly.dev/api/files/carros/id-do-carro/foto_do_carro.png');
});