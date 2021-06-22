package com.startup.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.startup.models.Startup;

@Repository
public interface StartupRepository extends JpaRepository<Startup, Long>{

}
