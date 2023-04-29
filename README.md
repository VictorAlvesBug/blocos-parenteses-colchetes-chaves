# Validador de blocos

Este projeto tem o objetivo de identificar quando uma **cadeia de caracteres** 
contendo "**(**", "**)**", "**[**", "**]**", "**{**" e/ou "**}**" é válida ou 
não. Isto é, seus blocos "**()**", "**[]**" e "**{}**" estão 
**organizados corretamente**.

## Configurando o projeto

Clone o repositório:

```bash
git clone https://github.com/VictorAlvesBug/blocos-parenteses-colchetes-chaves.git
```

Abra a pasta do projeto no Visual Studio Code.

Abra o terminal integrado do Visual Studio Code (Ctrl + ').

Instale as dependências do projeto:

```bash
npm install
```

## Testando o projeto manualmente

Passando uma cadeia de caracteres para a função validar:

```bash
npm run dev "(){(){[]{}()}}"
```

## Testando o projeto de forma automática

Executando os testes automatizados:

```bash
npm run test
```