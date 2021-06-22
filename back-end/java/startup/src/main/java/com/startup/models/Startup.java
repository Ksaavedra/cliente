package com.startup.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Data
@Entity
@Table(name = "startup")
public class Startup {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(name = "cnpj", nullable = false, unique = true)
	private String cnpj;
	
	@Column(name = "nome")
	private String nome;
	
	@Column(name = "email", nullable = false)
	private String email;
	
	@Column(name = "senha", nullable = false)
	private String senha;
	
	@Column(name = "telefone")
	private String telefone;

	@Column(name = "valor")
	private String valor;
	
	@Column(name = "texto")
	private String texto;
	
}
