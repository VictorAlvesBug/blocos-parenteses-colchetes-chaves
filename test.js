import assert from 'assert';
import validarBlocos from './validadorBlocos.js';

const listaTestes = [
  // Testes sugeridos
  ['(){}[]', true],
  ['[{()}](){}', true],
  ['[]{()', false],
  ['[{)]', false],

  // Zero caracteres
  ['', true],

  // Um caracter
  ['[', false],
  [']', false],
  ['(', false],
  ['{', false],
  [')', false],
  
  // Dois caracteres
  ['()', true],
  ['[]', true],
  ['{}', true],
  ['}[', false],
  ['{(', false],
  ['}}', false],
  ['((', false],
  [']}', false],
  ['[(', false],
  ['(]', false],
  ['}{', false],
  ['))', false],
  [')(', false],
  [')}', false],
  ['}]', false],
  ['{{', false],
  ['{)', false],
  [')[', false],
  ['])', false],
  [')]', false],
  ['}(', false],
  ['{]', false],
  [']]', false],
  ['][', false],
  ['](', false],
  ['[[', false],
  ['{[', false],
  ['([', false],
  ['})', false],
  ['[{', false],

  // Três caracteres
  [')[(', false],
  ['}[{', false],
  ['[{)', false],
  ['){)', false],
  [']](', false],
  
  // Quatro caracteres
  ['[]()', true],
  ['()()', true],
  ['[][]', true],
  ['{()}', true],
  ['[{}]', true],
  ['{}[]', true],
  ['([])', true],
  ['{}()', true],
  ['{{}}', true],
  ['()[]', true],
  ['[()]', true],
  ['(())', true],
  ['{}{}', true],
  ['}}])', false],
  ['[](}', false],
  [']})}', false],
  ['{}[)', false],
  ['(]{(', false],
  [')[)]', false],
  [']([(', false],
  [']}{)', false],
  ['{{[(', false],
  ['{}][', false],
  ['[]})', false],
  ['}[))', false],
  ['[}])', false],
  ['[)}[', false],
  ['({{)', false],
  ['[({{', false],
  ['()((', false],
  [']]]}', false],
  ['{[))', false],
  ['})})', false],
  [')[[[', false],
  ['([}[', false],
  [']{[(', false],
  [']})[', false],
  ['))}(', false],
  ['()({', false],
  ['((}]', false],
  ['({}{', false],
  ['}{(}', false],
  [')[}}', false],
  ['[)[}', false],
  ['](((', false],
  ['([[[', false],
  [']){}', false],
  ['])][', false],
  ['}}]}', false],
  ['{(({', false],
  ['}{]}', false],
  ['{]}}', false],
  ['}{()', false],
  ['[({]', false],
  [')[]]', false],
  ['](})', false],
  ['(((]', false],
  ['(){{', false],
  ['{{[[', false],
  ['{{((', false],
  ['{[])', false],
  ['})])', false],
  ['{}}}', false],
  ['[[](', false],
  ['([]{', false],
  ['][{}', false],
  ['{}){', false],
  [']][)', false],
  ['})[[', false],
  ['(}]{', false],
  [']([]', false],
  ['[}}{', false],
  ['){{)', false],
  ['}(({', false],
  ['{[})', false],
  ['({{(', false],
  ['}([]', false],
  [')[{[', false],
  ['}})[', false],
  ['(][[', false],
  ['{([)', false],
  [')}]]', false],
  ['}(])', false],
  ['}{[(', false],
  ['][)[', false],
  ['})][', false],
  ['[{){', false],
  ['][)]', false],
  [')[}[', false],
  ['{(}(', false],
  ['({({', false],
  ['}]]}', false],
  ['((((', false],
  [')[](', false],
  ['({((', false],
  ['[]{(', false],
  ['}){)', false],
  ['{)[(', false],
  ['[}[{', false],
  ['({][', false],
  
  // Cinco caracteres
  ['{)(}}', false],
  [']])))', false],
  ['({{}}', false],
  ['{}]}]', false],
  ['])))]', false],
  
  // Seis caracteres
  ['{{{}}}', true],
  ['{[]}{}', true],
  ['[][]()', true],
  ['()([])', true],
  [']}}(]{', false],
  [')]){}}', false],
  ['][]({(', false],
  ['[[)[[[', false],
  [')(]{[{', false],
  ['{))([{', false],
  ['{]([[]', false],
  ['[]))){', false],
  ['}}{[[[', false],
  ['}})][}', false],
  ['][(}([', false],
  ['])][){', false],
  ['})]{[{', false],
  ['[()])(', false],
  ['(({})(', false],
  ['{{]())', false],
  ['}[(){]', false],
  ['{{()[)', false],
  ['{)[([{', false],
  ['({])){', false],
  [')[]}[)', false],
  ['(}]{}[', false],
  ['][){]]', false],
  ['{}){{)', false],
  ['){(}](', false],
  [')(}(}(', false],
  ['()))()', false],
  ['}}{}{]', false],
  ['(]}){]', false],
  ['{}){])', false],
  ['}}]]((', false],
  [']{([})', false],
  ['[{{]){', false],
  [']}])({', false],
  ['(])]){', false],
  ['][]){}', false],
  ['}(({)(', false],
  [']))(][', false],
  ['](})])', false],
  ['[[((((', false],
  ['})[)){', false],
  ['}{[[[]', false],
  ['(}()}{', false],
  ['[{])]]', false],
  ['}}(])[', false],
  [')(})()', false],
  ['{([]](', false],
  ['[]{}[[', false],
  [')[{}]{', false],
  ['){{({]', false],
  ['[[[)[[', false],
  ['}]}([{', false],
  ['(}]]])', false],
  ['){({](', false],
  ['}]))](', false],
  ['}}){}}', false],
  ['{}])[{', false],
  ['{(}{{)', false],
  ['}{)}[[', false],
  ['](}[[]', false],
  ['({{))}', false],
  ['}]}}}(', false],
  ['}{)[)]', false],
  ['(](([[', false],
  ['}][)(]', false],
  ['})[]}]', false],
  ['[{}(]{', false],
  ['[)]][)', false],
  ['{[[[}[', false],
  [']{({()', false],
  ['}[[{[{', false],
  [']}])([', false],
  ['){[()]', false],
  [']])(}(', false],
  ['(){)(}', false],
  ['}}(]))', false],
  [')((]{]', false],
  ['({()}(', false],
  ['}((][[', false],
  ['{)][{}', false],
  ['][{)[}', false],
  ['}(()((', false],
  ['{{{)()', false],
  ['(]((({', false],
  [')(])}}', false],
  [')[}{}}', false],
  ['[(([)[', false],
  [']}](](', false],
  ['()([(}', false],
  ['}({({(', false],
  [']({}{]', false],
  [')]]({]', false],
  ['))[{))', false],
  ['[{{})]', false],
  ['(}()[(', false],
  ['}]][](', false],
];

describe('validarBlocos', () => {
  listaTestes.forEach(([strBlocos, ehValidoEsperado], indice) => {
    const strValidoEsperado = ehValidoEsperado ? 'válido' : 'inválido';

    it(`Teste #${indice + 1} - '${strBlocos}' deve ser ${strValidoEsperado}`, () => {
      assert.strictEqual(validarBlocos(strBlocos)?.ehValido, ehValidoEsperado);
    });
  });
});
