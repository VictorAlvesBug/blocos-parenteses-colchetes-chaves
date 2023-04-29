import validarBlocos from './validadorBlocos.js';

const listaArgumentos = process.argv;

const qtdeArgumentosEsperados = 3;
// ['node', 'index.js', argumento].length = 3

if (listaArgumentos.length !== qtdeArgumentosEsperados) {
  console.error(
    'Informe um argumento com a string que deseja validar\n' +
      'Ex: npm run dev "{}[]()"'
  );
} else {
  const argumento = listaArgumentos[2];

  const regexValidarArgumento = /^([\(\[\{\)\]\}]*)$/i;

  if (!regexValidarArgumento.test(argumento)) {
    console.error(
      'O argumento deve estar preferencialmente entre aspas, e possuir apenas os seguintes caracteres: {, }, [, ], ( e ).\n' +
        'Ex: "{}[]()"'
    );
  } else {
    const {ehValido, mensagem} = validarBlocos(argumento);
    
    if(ehValido){
        console.log(mensagem);
    }
    else{
        console.error(mensagem);
    }
  }
}
