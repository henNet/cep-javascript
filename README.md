# Projeto Front-end de Busca por CEPs

Este projeto tem o objetivo de pesquisar por informações de **localidade**, **logradouro**, **bairro** e **estado** através de um CEP informado. O projeto utiliza a API pública https://viacep.com.br/

## Design do Projeto

![imagem](image.png)

## Uso do projeto

O projeto pode ser utilizado e testado através da seguinte URL: https://hennet.github.io/cep-javascript/

## Utilização da API pública VIACEP

O site https://viacep.com.br/ disponibliza o seguinte endpoint abaixo para a busca de ceps. Considerando o cep 01001000 como exemplo, temos a seguinte URL de busca:

```
URL: viacep.com.br/ws/01001000/json/
```

O resultado da busca consiste em um JSON com as seguintes informações abaixo. Considereando como exemplo o cep: 01001000.

```
{
  "cep": "01001-000",
  "logradouro": "Praça da Sé",
  "complemento": "lado ímpar",
  "unidade": "",
  "bairro": "Sé",
  "localidade": "São Paulo",
  "uf": "SP",
  "ibge": "3550308",
  "gia": "1004",
  "ddd": "11",
  "siafi": "7107"
}
```
