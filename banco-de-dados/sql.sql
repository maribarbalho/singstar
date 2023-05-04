create database singstar;

use singstar;

create table usuarios (nome varchar(40) not null, 
cpf varchar(11) null, 
email varchar (70) not null, 
senha varchar(70) not null)