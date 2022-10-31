package com.tw.bicheech.socker;

import org.springframework.http.server.ServerHttpRequest;
import org.springframework.http.server.ServerHttpResponse;
import org.springframework.http.server.ServletServerHttpRequest;
import org.springframework.http.server.ServletServerHttpResponse;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.util.StringUtils;
import org.springframework.web.socket.WebSocketHandler;
import org.springframework.web.socket.server.HandshakeInterceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.PrintWriter;
import java.nio.charset.StandardCharsets;
import java.util.Base64;
import java.util.Map;

public class HttpHandshakeInterceptor implements HandshakeInterceptor {
    @Override
    public boolean beforeHandshake(ServerHttpRequest serverHttpRequest, ServerHttpResponse serverHttpResponse, WebSocketHandler wsHandler, Map<String, Object> attributes) throws Exception {
        System.out.println("===============================================================");
        System.out.println("beforeHandshake[]"+attributes);
        ServletServerHttpRequest ssreq = (ServletServerHttpRequest)serverHttpRequest;
        ServletServerHttpResponse ssres = (ServletServerHttpResponse)serverHttpResponse;
        HttpServletRequest req = ssreq.getServletRequest();
        HttpServletResponse res = ssres.getServletResponse();
        HttpSession session = req.getSession();
        System.out.println("session["+session.getId());
        System.out.println("session["+session.getMaxInactiveInterval());

        //authentication
        try {
            String header = req.getHeader("Authorization");
            System.out.println("header[" + header + "]");
            if (header == null) {
                System.out.println("The Authorization header is empty");
                throw new BadCredentialsException("The Authorization header is empty");
            } else {
                header = header.trim();
                if (!StringUtils.startsWithIgnoreCase(header, "Basic")) {
                    System.out.println("The Authorization header does not start with Basic.");
                } else if (header.equalsIgnoreCase("Basic")) {
                    throw new BadCredentialsException("Empty basic authentication token");
                } else {
                    byte[] base64Token = header.substring(6).getBytes(StandardCharsets.UTF_8);
                    byte[] decoded;
                    try {
                        decoded = Base64.getDecoder().decode(base64Token);
                    } catch (IllegalArgumentException var8) {
                        throw new BadCredentialsException("Failed to decode basic authentication token");
                    }
                    String token = new String(decoded, "UTF-8");
                    int delim = token.indexOf(":");
                    if (delim == -1) {
                        throw new BadCredentialsException("Invalid basic authentication token");
                    } else {
                        System.out.println("TOKEN [" +token+"]");
                        String principal = token.substring(0, delim);
                        String credencial = token.substring(delim + 1);
                        //your

                        if(principal.equals("testuser") && credencial.equals("1234")){
                            System.out.println("login OK");
                        }else{
                            throw new BadCredentialsException("Invalid basic authentication token");
                        }
                    }
                }
            }
        }catch(Exception e){
            System.out.println("Basic Authentication error"+ e.getMessage());

            res.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
            res.addHeader("WWW-Authenticate", "Basic realm=" + "Realm" + "");
            PrintWriter pw = res.getWriter();
            pw.println("Invalid status code received: 401 Status line: HTTP/1.1 401");
            return false;
        }

        return true;
    }

    @Override
    public void afterHandshake(ServerHttpRequest request, ServerHttpResponse response, WebSocketHandler wsHandler, Exception exception) {

    }
}
