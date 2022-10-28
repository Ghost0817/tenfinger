package com.tw.bicheech.config;

import com.tw.bicheech.security.service.JwtUserDetailsService;
import com.tw.bicheech.socker.model.StompPrincipal;
import io.jsonwebtoken.ExpiredJwtException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.messaging.Message;
import org.springframework.messaging.MessageChannel;
import org.springframework.messaging.simp.config.ChannelRegistration;
import org.springframework.messaging.simp.config.MessageBrokerRegistry;
import org.springframework.messaging.simp.stomp.StompCommand;
import org.springframework.messaging.simp.stomp.StompHeaderAccessor;
import org.springframework.messaging.support.ChannelInterceptor;
import org.springframework.messaging.support.MessageHeaderAccessor;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.socket.config.annotation.EnableWebSocketMessageBroker;
import org.springframework.web.socket.config.annotation.StompEndpointRegistry;
import org.springframework.web.socket.config.annotation.WebSocketMessageBrokerConfigurer;

import java.util.ArrayList;
import java.util.UUID;

@Configuration
@EnableWebSocketMessageBroker
public class WebSocketConfiguration implements WebSocketMessageBrokerConfigurer {

    @Autowired
    private JwtTokenUtil jwtTokenUtil;

    private StompPrincipal currnetUser;

    @Override
    public void configureMessageBroker(MessageBrokerRegistry config) {
        config.setApplicationDestinationPrefixes("/app");
        config.enableSimpleBroker("/topic");
        //config.setCacheLimit();
        //config.enableSimpleBroker("/user");
        //config.setUserDestinationPrefix("/user");
    }

    @Override
    public void registerStompEndpoints(StompEndpointRegistry registry) {
        String[] domains
                = new String[] { "http://192.168.8.32:4200", "http://192.168.8.32:8080", "http://192.168.8.32:80", "http://localhost:4200", "http://localhost:9876/" };

        registry.addEndpoint("/ws")
                .setAllowedOrigins(domains)
                //.setHandshakeHandler(new UserHandshakerHandler())
                //.setHandshakeHandler(handshakeHandler())
                //.addInterceptors(new HttpHandshakeInterceptor())
                .withSockJS()
                .setStreamBytesLimit(512 * 1024)
                .setHttpMessageCacheSize(1000)
                .setDisconnectDelay(30 * 1000);
    }

    @Override
    public void configureClientInboundChannel(ChannelRegistration registration) {
        //registration.interceptors(new JwtChannelInterceptor())
        registration.interceptors(new ChannelInterceptor() {

            @Autowired
            private JwtUserDetailsService jwtUserDetailsService;

            @Override
            public Message<?> preSend(Message<?> message, MessageChannel channel) {
                StompHeaderAccessor accessor = MessageHeaderAccessor.getAccessor(message, StompHeaderAccessor.class);
                if (accessor != null &&
                        (StompCommand.CONNECT.equals(accessor.getCommand()) ||
                                StompCommand.SEND.equals(accessor.getCommand()))) {

                    //currnetUser = new StompPrincipal("Guest666",accessor.getFirstNativeHeader("token"));
                    String token = accessor.getFirstNativeHeader("token");

                    String username = null;
                    String jwtToken = null;
                    String jwtErrorMessage = "";
                    if (token != null && token.startsWith("Bearer ")) {
                        jwtToken = token.substring(7);
                        try {
                            username = jwtTokenUtil.getUsernameFromToken(jwtToken);
                        } catch (IllegalArgumentException e) {
                            jwtErrorMessage = "Unable to get JWT Token";
                            //response.sendError(HttpServletResponse.SC_UNAUTHORIZED, "Unauthorized");
                        } catch (ExpiredJwtException e) {
                            jwtErrorMessage = "JWT Token has expired";
                            //response.sendError(HttpServletResponse.SC_UNAUTHORIZED, "Unauthorized");
                        }
                    } else {
                        jwtErrorMessage = "JWT Token does not begin with Bearer String";
                        //logger.warn("JWT Token does not begin with Bearer String");
                    }
                    System.out.println(jwtErrorMessage);

                    //Once we get the token validate it.
                    if (username != null && SecurityContextHolder.getContext().getAuthentication() == null) {
                        currnetUser = new StompPrincipal(username,jwtToken);
                        //currnetUser = (StompPrincipal) this.jwtUserDetailsService.loadUserByUsername(username);
                    } else {
                        UserDetails userDetails = new User("Guest", UUID.randomUUID().toString(), new ArrayList<>());


                        System.out.println("Creating \"Guest\" user because there is "+jwtErrorMessage+".");
                        //String randomId = "Bearer "+ UUID.randomUUID().toString();
                        String randomId = "Bearer "+ jwtTokenUtil.generateToken(userDetails);
                        currnetUser = new StompPrincipal("Guest",randomId);
                    }

                    //authenticationManager.authenticate(JwtAuthentication(token))
                    //Principal yourAuth = token == null ? null : [...];
                    System.out.println("accessor.getMessageType() >>>>"+accessor.getMessageType());
//                    if (accessor.getMessageType() == SimpMessageType.CONNECT) {
//                        userRegistry.onApplicationEvent(SessionConnectedEvent(this, message, currnetUser));
//                    } else if (accessor.messageType == SimpMessageType.SUBSCRIBE) {
//                        userRegistry.onApplicationEvent(SessionSubscribeEvent(this, message, yourAuth));
//                    } else if (accessor.messageType == SimpMessageType.UNSUBSCRIBE) {
//                        userRegistry.onApplicationEvent(SessionUnsubscribeEvent(this, message, yourAuth));
//                    } else if (accessor.messageType == SimpMessageType.DISCONNECT) {
//                        userRegistry.onApplicationEvent(SessionDisconnectEvent(this, message, accessor.sessionId, CloseStatus.NORMAL));
//                    }

                    accessor.setUser(currnetUser);
                    // not documented anywhere but necessary otherwise NPE in StompSubProtocolHandler!
                    accessor.setLeaveMutable(true);
                }
                return message;
            }
        });
    }
}
