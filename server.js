const fastify = require("fastify");
const fs = require("fs");
const csv = require("csv-parser");
const validaCpf = require("validar-cpf");
const validaCnpj = require("validar-cnpj");

const server = fastify();
const dataJson = "data.json";

server.get("/", () => {
  let rows = [];

  fs.createReadStream("data.csv")
    .pipe(csv())
    .on("data", (data) => {
      if (data.nrCpfCnpj.length <= 11) {
        if (!validaCpf(data.nrCpfCnpj)) {
          data.nrCpfCnpj = `${data.nrCpfCnpj} - CPF Inválido`;
        }
      } else if (data.nrCpfCnpj.length > 11 && data.nrCpfCnpj.length <= 18) {
        if (!validaCnpj(data.nrCpfCnpj)) {
          data.nrCpfCnpj = `${data.nrCpfCnpj} - CNPJ Inválido`;
        }
      }

      data.vlTotal = data.vlTotal / data.qtPrestacoes;
      const novoValor = checaVlPrestacao(data);

      data.vlPresta = novoValor ? novoValor : false;
      data.vlTotal = formatarValor(data.vlTotal);
      data.vlMora = formatarValor(data.vlMora);
      data.vlAtual = formatarValor(data.vlAtual);

      rows.push(data);
    })
    .on("end", () => {
      fs.writeFileSync(dataJson, JSON.stringify(rows, null, 2));
      console.log("CSV convetido");
    });

  return "Teste conversão de moeda \nGabriel Baroni ( gabrielbaroni1@gmail.com )";
});

const formatarValor = (valor) => {
  const formatNumber = new Intl.NumberFormat("pt-BR");
  return formatNumber.format(valor);
};

const checaVlPrestacao = (data) => {
  data.vlTotal = formatarValor(data.vlTotal / data.qtPrestacoes);

  if (data.vlTotal === data.vlPresta) {
    return data.vlTotal;
  }

  return false;
};

server.listen({ port: 4000 });
