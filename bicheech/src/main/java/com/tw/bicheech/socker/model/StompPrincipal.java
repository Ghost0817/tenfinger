package com.tw.bicheech.socker.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.security.Principal;
import java.util.Collection;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class StompPrincipal implements Principal {
    String username;
    String name;
}

