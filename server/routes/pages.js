const express = require("express");
const router = express.Router();
const db = require("../config/database");

router.get("/", (req, res) => {
  res.send("Olá mundo!");
});

// COMANDO PRINCIPAIS DATABASE

const criarBanco = () => {
  db.query("CREATE DATABASE IF NOT EXISTS transport", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log("The database has been created!");
    }
  });
};

const usarBanco = () => {
  db.query("use transport", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log("The database is in use!");
    }
  });
};

const criarTableClientes = () => {
  db.query(
    "CREATE TABLE if not exists clientes (id INT NOT NULL AUTO_INCREMENT, nome varchar(105) NOT NULL, nome_abreviado varchar(55), codigo varchar(55) NOT NULL, grupo varchar(100), cnpj varchar(18), status enum('Ativo', 'Inativo'), pais varchar(75), estado varchar(75), cidade varchar(75), bairro varchar(75), endereco varchar(105), lat varchar(45), longi varchar(45), PRIMARY KEY (id))",
    (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Table clientes criada com sucesso!");
      }
    }
  );
};

const criarTableVeiculos = () => {
  db.query(
    "CREATE TABLE if not exists veiculos (id INT NOT NULL AUTO_INCREMENT, codigo_tipo_veiculo varchar(5), descricao_tipo varchar(45), quantidade_eixos INT, pbt FLOAT, peso_min_carga FLOAT, peso_max_carga FLOAT, peso_max_eixo FLOAT, comprimento FLOAT, largura FLOAT, altura FLOAT, PRIMARY KEY (id))",
    (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Table veiculos criada com sucesso!");
      }
    }
  );
};

const criarTableProdutos = () => {
  db.query(
    "CREATE TABLE if not exists produtos (id INT NOT NULL AUTO_INCREMENT, codigo_produto varchar(45), peca varchar(15), cliente varchar(45), quantidade_no_pallete INT, kilograma_total FLOAT, palletizacao varchar(255), largura_ue FLOAT, comprimento_ue FLOAT, altura_ue FLOAT, referencia varchar(255), PRIMARY KEY (id))",
    (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Table produtos criada com sucesso!");
      }
    }
  );
};

const criarTableOrigens = () => {
  db.query(
    "CREATE TABLE if not exists origens (id INT NOT NULL AUTO_INCREMENT, nome varchar(45), CNPJ varchar(20), codigo varchar(45), endereco varchar(15), estado varchar(45), cidade varchar(45), lat varchar(45), longi varchar(45), PRIMARY KEY (id))",
    (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Table origens criada com sucesso!");
      }
    }
  );
};

// CADASTRO CLIENTES

router.post("/clientes", (req, res) => {
  const {
    nomeEmpresa,
    nomeAbreviado,
    codigo,
    grupo,
    cnpj,
    status,
    pais,
    estado,
    cidade,
    bairro,
    endereco,
    lat,
    long,
  } = req.body;

  criarBanco();
  usarBanco();
  criarTableClientes();

  db.query(
    "INSERT INTO clientes (nome, nome_abreviado, codigo, grupo, cnpj, status, pais, estado, cidade, bairro, endereco, lat, longi) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
    [
      nomeEmpresa,
      nomeAbreviado,
      codigo,
      grupo,
      cnpj,
      status,
      pais,
      estado,
      cidade,
      bairro,
      endereco,
      lat,
      long,
    ],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log("All the data has been passed to the database!");
      }
    }
  );
});

// CADASTRO VEÍCULOS

router.post("/veiculos", (req, res) => {
  const {
    codigoTipoVeiculo,
    descricaoTipo,
    quantidadeEixos,
    pbt,
    pesoMinCarga,
    pesoMaxCarga,
    pesoMaxEixo,
    comprimento,
    largura,
    altura
  } = req.body;

  criarBanco();
  usarBanco();
  criarTableVeiculos();

  db.query(
    "INSERT INTO veiculos (codigo_tipo_veiculo, descricao_tipo, quantidade_eixos, pbt, peso_min_carga, peso_max_carga, peso_max_eixo, comprimento, largura, altura) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
    [
      codigoTipoVeiculo,
      descricaoTipo,
      quantidadeEixos,
      pbt,
      pesoMinCarga,
      pesoMaxCarga,
      pesoMaxEixo,
      comprimento,
      largura,
      altura
    ],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log("All the data has been passed to the database!");
      }
    }
  );
});

// CADASTRO PRODUTOS

router.post("/produtos", (req, res) => {
  const {
    codigoProduto,
    peca,
    cliente,
    quantidadeNoPallet,
    kgTotal,
    palletizacao,
    larguraUE,
    comprimentoUE,
    alturaUE,
    referencia
  } = req.body;

  criarBanco();
  usarBanco();
  criarTableProdutos();

  db.query(
    "INSERT INTO produtos (codigo_produto, peca, cliente, quantidade_no_pallete, kilograma_total, palletizacao, largura_ue, comprimento_ue, altura_ue, referencia) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
    [
      codigoProduto,
      peca,
      cliente,
      quantidadeNoPallet,
      kgTotal,
      palletizacao,
      larguraUE,
      comprimentoUE,
      alturaUE,
      referencia
    ],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log("All the data has been passed to the database!");
      }
    }
  );
});

// CADASTRO ORIGENS

router.post("/origens", (req, res) => {
  const {
    nome,
    CNPJ,
    codigo,
    endereco,
    estado,
    cidade,
    lat,
    longi
  } = req.body;

  criarBanco();
  usarBanco();
  criarTableOrigens();

  db.query(
    "INSERT INTO origens (nome, CNPJ, codigo, endereco, estado, cidade, lat, longi) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
    [
      nome,
      CNPJ,
      codigo,
      endereco,
      estado,
      cidade,
      lat,
      longi
    ],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log("All the data has been passed to the database!");
      }
    }
  );
});

// Inserir Dados nos Clientes por planilha

router.post("/planilha-clientes", (req, res) => {
  const {
    nome,
    nome_abreviado,
    codigo,
    grupo,
    cnpj,
    status,
    pais,
    estado,
    cidade,
    bairro,
    endereco,
    lat,
    long,
  } = req.body;

  criarTableClientes();

  db.query(
    "INSERT INTO clientes (nome, nome_abreviado, codigo, grupo, cnpj, status, pais, estado, cidade, bairro, endereco, lat, longi) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
    [
      nome, nome_abreviado, codigo, grupo, cnpj, status, pais, estado, cidade, bairro, endereco, lat, long
    ],
    (err) => {
      if (err) {
        console.log(err)
      } else {
        console.log('Dados adicionados para a tabela clientes!')
        res.send('Hello World!')
      }
    }
  );
});

// Inserir Dados nos Veículos por planilha

router.post("/planilha-veiculos", (req, res) => {
  const {
    codigo_tipo_veiculo,
    descricao_tipo,
    quantidade_eixos,
    pbt,
    peso_min_carga,
    peso_max_carga,
    peso_max_eixo,
    comprimento,
    largura,
    altura
  } = req.body;

  criarTableVeiculos();

  db.query(
    "INSERT INTO veiculos (codigo_tipo_veiculo, descricao_tipo, quantidade_eixos, pbt, peso_min_carga, peso_max_carga, peso_max_eixo, comprimento, largura, altura) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
    [
      codigo_tipo_veiculo, descricao_tipo, quantidade_eixos, pbt, peso_min_carga, peso_max_carga, peso_max_eixo, comprimento, largura, altura
    ],
    (err) => {
      if (err) {
        console.log(err)
      } else {
        console.log('Dados adicionados para a tabela veículos!')
        res.send('Hello World!')
      }
    }
  );
});

// Inserir Dados nos Produtos por planilha

router.post("/planilha-produtos", (req, res) => {
  const {
    codigoProduto,
    peca,
    cliente,
    quantidadeNoPallet,
    kgTotal,
    palletizacao,
    larguraUE,
    comprimentoUE,
    alturaUE,
    referencia
  } = req.body;

  criarBanco();
  usarBanco();
  criarTableProdutos();

  db.query(
    "INSERT INTO produtos (codigo_produto, peca, cliente, quantidade_no_pallete, kilograma_total, palletizacao, largura_ue, comprimento_ue, altura_ue, referencia) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
    [
      codigoProduto,
      peca,
      cliente,
      quantidadeNoPallet,
      kgTotal,
      palletizacao,
      larguraUE,
      comprimentoUE,
      alturaUE,
      referencia
    ],
    (err) => {
      if (err) {
        console.log(err)
      } else {
        console.log('Dados adicionados para a tabela produtos!')
        res.send('Hello World!')
      }
    }
  );
});

// Inserir Dados nas Origens por planilha

router.post("/planilha-origens", (req, res) => {
  const {
    nome,
    CNPJ,
    codigo,
    endereco,
    cidade,
    estado,
    lat,
    longi
  } = req.body;

  criarBanco();
  usarBanco();
  criarTableOrigens();

  db.query(
    "INSERT INTO origens (nome, CNPJ, codigo, endereco, estado, cidade, lat, longi) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
    [
      nome,
      CNPJ,
      codigo,
      endereco,
      estado,
      cidade,
      lat,
      longi
    ],
    (err) => {
      if (err) {
        console.log(err)
      } else {
        console.log('Dados adicionados para a tabela origens!')
        res.send('Hello World!')
      }
    }
  );
});

module.exports = router;
