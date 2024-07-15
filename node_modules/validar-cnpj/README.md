# validar-cnpj

> Valida um número de CNPJ baseado no algorítmo "módulo 11"

[![Actions Status](https://github.com/guilhermehn/validar-cnpj/workflows/Node%20CI/badge.svg)](https://github.com/guilhermehn/validar-cnpj/actions)
[![npm version](https://badge.fury.io/js/validar-cnpj.svg)](http://badge.fury.io/js/validar-cnpj)
[![Known Vulnerabilities](https://snyk.io/test/github/guilhermehn/validar-cnpj/badge.svg)](https://snyk.io/test/github/guilhermehn/validar-cnpj)

## Instalar

`npm install validar-cnpj -S`

## Uso

```js
const validarCpf = require('validar-cnpj');
validarCpf('12345678912345'); // false
validarCpf('123.456.789/123-45'); // false
```

## Tamanhos

[![Install size](https://badgen.net/packagephobia/install/validar-cnpj)](https://badgen.net/packagephobia/install/validar-cnpj)
[![Minified size](https://badgen.net/bundlephobia/min/validar-cnpj)](https://badgen.net/bundlephobia/min/validar-cnpj)
[![Minified + gzip size](https://badgen.net/bundlephobia/minzip/validar-cnpj)](https://badgen.net/bundlephobia/minzip/validar-cnpj)

## Licensa

MIT
