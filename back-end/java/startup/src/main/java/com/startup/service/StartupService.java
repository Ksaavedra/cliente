package com.startup.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.startup.models.Startup;
import com.startup.repository.StartupRepository;

@Service
public class StartupService {
	
	@Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	@Autowired
	private StartupRepository repository;

	@Transactional
	public Startup salvar(Startup startup) {
		String senha = startup.getSenha(); //123456
		senha = passwordEncoder.encode(senha);
		
		startup.setSenha(senha);
		
		return repository.save(startup);
	}

	public List<Startup> buscarTodos() {		
		return repository.findAll();
	}

	public Startup buscarPorId(Long id) {
		return repository.findById(id).get();
	}

	@Transactional
	public void excluir(Long id) {
		
		repository.deleteById(id);
	}

}
