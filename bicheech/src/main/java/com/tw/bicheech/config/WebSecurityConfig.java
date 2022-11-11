package com.tw.bicheech.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.annotation.Order;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.Arrays;

@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)
@Order(1)
public class WebSecurityConfig {


	@Autowired
	private JwtAuthenticationEntryPoint jwtAuthenticationEntryPoint;

	@Autowired
	private JwtRequestFilter jwtRequestFilter;

//	@Autowired
//	public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
//		// configure AuthenticationManager so that it knows from where to load
//		// user for matching credentials
//		// Use BCryptPasswordEncoder
//		auth.userDetailsService(jwtUserDetailsService).passwordEncoder(passwordEncoder());
//	}

	@Bean
	public PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}

	@Bean
	public AuthenticationManager authenticationManager(AuthenticationConfiguration authenticationConfiguration) throws Exception {
		return authenticationConfiguration.getAuthenticationManager();
	}

	@Bean
	protected SecurityFilterChain filterChain(HttpSecurity httpSecurity) throws Exception {
		// We don't need CSRF for this example
		httpSecurity.cors().configurationSource(corsConfigurationSource()).and().csrf().disable()
				// dont authenticate this particular request
				.authorizeRequests()
				.antMatchers("/ws/*").permitAll()
				.antMatchers(HttpMethod.POST, "/authenticate").permitAll()
				.antMatchers(HttpMethod.POST, "/register-student").permitAll()
				.antMatchers(HttpMethod.POST, "/forgot").permitAll()
				.antMatchers(HttpMethod.POST, "/reset-password").permitAll()
				.antMatchers(HttpMethod.GET, "/wall-of-fame").permitAll()
				.antMatchers(HttpMethod.POST, "/hall-of-fame-list").permitAll()
				.antMatchers(HttpMethod.GET, "/lesson").permitAll()
				.antMatchers(HttpMethod.POST, "/exercise").permitAll()
				.antMatchers(HttpMethod.POST, "/test").permitAll()
				.antMatchers(HttpMethod.POST, "/contactus").permitAll()
				.antMatchers("/app/*").permitAll()
				// all other requests need to be authenticated
				.anyRequest().authenticated().and().
				// make sure we use stateless session; session won't be used to
				// store user's state.
						exceptionHandling().authenticationEntryPoint(jwtAuthenticationEntryPoint).and().sessionManagement()
				.sessionCreationPolicy(SessionCreationPolicy.STATELESS);

		// Add a filter to validate the tokens with every request
		httpSecurity.addFilterBefore(jwtRequestFilter, UsernamePasswordAuthenticationFilter.class);

		return httpSecurity.build();
	}

	@Bean
	CorsConfigurationSource corsConfigurationSource() {
		CorsConfiguration configuration = new CorsConfiguration();
		String[] stringArray = new String[] { "http://localhost:4200", "http://localhost:9876/", "http://192.168.8.32:4200", "http://192.168.8.32:8080", "http://192.168.8.32:80" };
		configuration.setAllowedOrigins(Arrays.asList(stringArray));
		configuration.setAllowedMethods(Arrays.asList("GET","POST"));
		configuration.setAllowedHeaders(Arrays.asList("*"));
		configuration.setAllowCredentials(true);
		UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
		source.registerCorsConfiguration("/**", configuration);
		return source;
	}
}