package com.tw.bicheech.socker;

import com.tw.bicheech.socker.model.StompPrincipal;
import org.springframework.http.server.ServerHttpRequest;
import org.springframework.web.socket.WebSocketHandler;
import org.springframework.web.socket.server.support.DefaultHandshakeHandler;

import java.security.Principal;
import java.util.Map;
import java.util.UUID;

public class UserHandshakerHandler extends DefaultHandshakeHandler {
    @Override
    protected Principal determineUser(ServerHttpRequest request, WebSocketHandler wsHandler, Map<String, Object> attributes) {
        String randomId = UUID.randomUUID().toString();
        System.out.println("User Id:" + randomId);
        System.out.println("Headers:" + wsHandler);
        return (Principal) new StompPrincipal("Guest",randomId);
    }
}
