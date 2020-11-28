CREATE DATABASE IF NOT EXISTS transport;

CREATE TYPE status_creator AS ENUM('Ativo', 'Inativo')

CREATE TABLE IF NOT EXISTS clientes (
    id SERIAL PRIMARY KEY,
    nome_empresa varchar(255),
    ponto varchar(255),
    codigo varchar(255),
    descricao_sicp varchar(255),
    status status_creator,
    pais varchar(255),
    estado varchar(255),
    cidade varchar(255),
    bairro varchar(255),
    endereco varchar(300),
    lat varchar(255),
    long varchar(255)
);