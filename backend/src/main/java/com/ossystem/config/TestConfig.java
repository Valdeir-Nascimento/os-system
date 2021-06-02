package com.ossystem.config;

import com.ossystem.service.DBService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

@Profile("test")
@Configuration
public class TestConfig {
    @Autowired
    private DBService service;

    @Bean
    public void instaciaDB() {
        service.instanciaDB();
    }
}
