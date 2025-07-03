package com.project.Todo.securityConfig;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
@Configuration
public class SecurityConfig {

    @Bean
    WebMvcConfigurer webMvcConfigurer(){
    return new WebMvcConfigurer() {
        @Override
        public void addCorsMappings(CorsRegistry registry) {
            registry.addMapping("/**").allowedMethods("*").allowedOrigins("http://localhost:5173");
            WebMvcConfigurer.super.addCorsMappings(registry);
        }
    };
}
//    @Bean
//    public SecurityFilterChain securityFilerChain(HttpSecurity http) throws Exception{
//        http.authorizeHttpRequests(
//                        auth-> auth.requestMatchers(HttpMethod.OPTIONS, "/**").permitAll()
//                        .anyRequest().authenticated())
//                        .httpBasic(Customizer.withDefaults())
//                        .sessionManagement(
//                                session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS)
//                        )
//                        .csrf(csrf -> csrf.disable());
//        return http.build();
        //equivalent to below syntax
        //        http.authorizeHttpRequests(auth->auth.anyRequest().authenticated());
//        http.httpBasic(Customizer.withDefaults());
//        http.sessionManagement(
//                session->session.sessionCreationPolicy(SessionCreationPolicy.STATELESS)
//        );
//        http.csrf().disable();


//    }

}
