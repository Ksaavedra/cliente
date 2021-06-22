package com.startupInputDTO;

import lombok.Getter;
import lombok.NonNull;
import lombok.Setter;

@Getter
@Setter
public class StartupInputDTO {

	private String nome;
	@NonNull
	private String cnpj;
	@NonNull
	private String email;
	private String telefone;
	private String valor;
	private String texto;
}
