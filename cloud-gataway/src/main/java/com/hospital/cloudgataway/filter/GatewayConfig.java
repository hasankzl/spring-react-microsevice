package com.hospital.cloudgataway.filter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class GatewayConfig {

    @Autowired
    AuthenticationFilter filter;

    @Bean
    public RouteLocator routes(RouteLocatorBuilder builder) {
        return builder.routes()
                .route("HOSPITAL-SERVICE", r -> r.path("/hospital/**")
                        .filters(f -> f.filter(filter))
                        .uri("lb://HOSPITAL-SERVICE"))
                .route("APPOINTMENT-SERVICE", r -> r.path("/appointment/**")
                        .filters(f -> f.filter(filter))
                        .uri("lb://APPOINTMENT-SERVICE"))
                .build();
    }

}